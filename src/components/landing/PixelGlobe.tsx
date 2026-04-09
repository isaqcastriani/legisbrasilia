import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const GLOBE_RADIUS = 2.0;
const GLOBE_PARTICLE_COUNT = 8000;
const AMBIENT_PARTICLE_COUNT = 500;
const TOTAL_PARTICLES = GLOBE_PARTICLE_COUNT + AMBIENT_PARTICLE_COUNT;
const PIXEL_SIZE = 0.035;

function generateGlobePoints(count: number, ambientCount: number, radius: number) {
  const total = count + ambientCount;
  const positions = new Float32Array(total * 3);
  const originalPositions = new Float32Array(total * 3);
  const colors = new Float32Array(total * 3);
  const sizes = new Float32Array(total);

  const lime = new THREE.Color("#CDE800");
  const teal = new THREE.Color("#04A4A1");
  const dimTeal = new THREE.Color("#026b69");
  const dimLime = new THREE.Color("#8BA300");

  // Globe particles
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

    const noise1 = Math.sin(phi * 5.3 + theta * 2.1) * 0.3;
    const noise2 = Math.cos(phi * 3.7 + theta * 4.6) * 0.2;
    const noise3 = Math.sin(phi * 8.1 + theta * 1.3) * 0.15;
    const landMask = noise1 + noise2 + noise3;

    const isLand = landMask > -0.05;
    const density = isLand ? 1 : (Math.random() > 0.6 ? 1 : 0);

    if (density === 0) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = -999;
      originalPositions[i * 3] = 0;
      originalPositions[i * 3 + 1] = 0;
      originalPositions[i * 3 + 2] = -999;
      sizes[i] = 0;
      continue;
    }

    const r = radius + (isLand ? 0.02 : 0);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    originalPositions[i * 3] = x;
    originalPositions[i * 3 + 1] = y;
    originalPositions[i * 3 + 2] = z;

    const color = isLand
      ? (Math.random() > 0.4 ? lime : dimLime)
      : (Math.random() > 0.3 ? teal : dimTeal);

    const brightness = 0.5 + Math.random() * 0.5;
    colors[i * 3] = color.r * brightness;
    colors[i * 3 + 1] = color.g * brightness;
    colors[i * 3 + 2] = color.b * brightness;

    sizes[i] = PIXEL_SIZE * (isLand ? (0.8 + Math.random() * 0.5) : (0.4 + Math.random() * 0.3));
  }

  // Ambient scattered particles
  for (let j = 0; j < ambientCount; j++) {
    const i = count + j;
    const r = 2.5 + Math.random() * 2.5;
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    originalPositions[i * 3] = x;
    originalPositions[i * 3 + 1] = y;
    originalPositions[i * 3 + 2] = z;

    const color = Math.random() > 0.5 ? dimTeal : dimLime;
    const brightness = 0.2 + Math.random() * 0.3;
    colors[i * 3] = color.r * brightness;
    colors[i * 3 + 1] = color.g * brightness;
    colors[i * 3 + 2] = color.b * brightness;

    sizes[i] = PIXEL_SIZE * (0.2 + Math.random() * 0.3);
  }

  return { positions, originalPositions, colors, sizes };
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  const { positions, originalPositions, colors, sizes } = useMemo(
    () => generateGlobePoints(GLOBE_PARTICLE_COUNT, AMBIENT_PARTICLE_COUNT, GLOBE_RADIUS),
    []
  );

  const handlePointerMove = useCallback((e: { clientX: number; clientY: number }) => {
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useMemo(() => {
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [handlePointerMove]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    timeRef.current += delta;

    const geo = pointsRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    pointsRef.current.rotation.y += delta * 0.08;

    const mouseWorld = new THREE.Vector3(
      mx * viewport.width * 0.5,
      my * viewport.height * 0.5,
      0
    );

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      const ox = originalPositions[i * 3];
      const oy = originalPositions[i * 3 + 1];
      const oz = originalPositions[i * 3 + 2];

      if (oz < -100) continue;

      const rotY = pointsRef.current.rotation.y;
      const cosR = Math.cos(rotY);
      const sinR = Math.sin(rotY);
      const wx = ox * cosR + oz * sinR;
      const wz = -ox * sinR + oz * cosR;

      const dx = mouseWorld.x - wx;
      const dy = mouseWorld.y - oy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Fluid attraction — pull toward cursor
      const influence = Math.max(0, 1 - dist / 3.5);
      const pullStrength = influence * influence * 0.4;
      const wave = Math.sin(timeRef.current * 3 + dist * 2) * influence * 0.1;

      const pullX = (dx / (dist + 0.01)) * pullStrength;
      const pullY = (dy / (dist + 0.01)) * pullStrength;

      const lerpFactor = 0.05;
      const targetX = ox + pullX * cosR + wave;
      const targetY = oy + pullY + wave;
      const targetZ = oz - pullX * sinR;

      pos[i * 3] += (targetX - pos[i * 3]) * lerpFactor;
      pos[i * 3 + 1] += (targetY - pos[i * 3 + 1]) * lerpFactor;
      pos[i * 3 + 2] += (targetZ - pos[i * 3 + 2]) * lerpFactor;
    }

    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={TOTAL_PARTICLES}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={TOTAL_PARTICLES}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          array={sizes}
          count={TOTAL_PARTICLES}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={PIXEL_SIZE}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function PixelGlobe() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
