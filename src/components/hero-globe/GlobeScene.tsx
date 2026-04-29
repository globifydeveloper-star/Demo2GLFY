// @ts-nocheck
"use client";

import { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Sphere, Line, Preload } from "@react-three/drei";
import * as THREE from "three";

// Preload textures so they're cached before the component mounts
THREE.DefaultLoadingManager.onLoad = () => {};
const textureLoader = new THREE.TextureLoader();
textureLoader.load("/textures/earth-day.jpg");
textureLoader.load("/textures/earth-topology.png");

/* ── Bright network node ── */
const CityDot = ({ position, delay }: { position: THREE.Vector3; delay: number }) => {
  const glowRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.003 + delay) * 0.4);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.3 + Math.sin(Date.now() * 0.004 + delay) * 0.2;
    }
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.025, 10, 10]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.06, 10, 10]} />
        <meshBasicMaterial color="#ff8844" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};

/* ── Animated arc — white/teal ── */
const AnimatedArc = ({ points, delay }: { points: THREE.Vector3[]; delay: number }) => {
  const dotRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (!dotRef.current || points.length === 0) return;
    const t = ((Date.now() * 0.0003 + delay) % 1);
    const idx = Math.floor(t * (points.length - 1));
    const p = points[Math.min(idx, points.length - 1)];
    dotRef.current.position.copy(p);
    (dotRef.current.material as THREE.MeshBasicMaterial).opacity = 0.5 + Math.sin(t * Math.PI) * 0.5;
  });

  return (
    <group>
      <Line points={points} color="#664422" lineWidth={1.0} transparent opacity={0.2} />
      <Line points={points} color="#ff9944" lineWidth={0.5} transparent opacity={0.5} />
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} toneMapped={false} />
      </mesh>
    </group>
  );
};

/* ── HUD Ring with pulsing segments + scan sweep ── */
const HUDRing = ({
  radius,
  tilt,
  speed,
  opacity,
  dashed,
  lineWidth = 0.6,
  hasScanSweep = false,
  hasPulsingNodes = false,
}: {
  radius: number;
  tilt: [number, number, number];
  speed: number;
  opacity: number;
  dashed?: boolean;
  lineWidth?: number;
  hasScanSweep?: boolean;
  hasPulsingNodes?: boolean;
}) => {
  const ref = useRef<THREE.Group>(null!);
  const sweepRef = useRef<THREE.Mesh>(null!);
  const nodeRefs = useRef<THREE.Mesh[]>([]);

  const segments = useMemo(() => {
    const segs: THREE.Vector3[][] = [];
    const total = 200;
    let current: THREE.Vector3[] = [];
    for (let i = 0; i <= total; i++) {
      const angle = (i / total) * Math.PI * 2;
      const pt = new THREE.Vector3(radius * Math.cos(angle), 0, radius * Math.sin(angle));
      if (!dashed || Math.floor(i / 5) % 2 === 0) {
        current.push(pt);
      } else {
        if (current.length > 1) segs.push(current);
        current = [];
      }
    }
    if (current.length > 1) segs.push(current);
    return segs;
  }, [radius, dashed]);

  // Data nodes on ring
  const nodePositions = useMemo(() => {
    if (!hasPulsingNodes) return [];
    const nodes: THREE.Vector3[] = [];
    const count = 6;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      nodes.push(new THREE.Vector3(radius * Math.cos(angle), 0, radius * Math.sin(angle)));
    }
    return nodes;
  }, [radius, hasPulsingNodes]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += speed * delta * 0.3;
      ref.current.rotation.y += speed * delta * 0.15;
    }

    // Scan sweep
    if (sweepRef.current && hasScanSweep) {
      const sweepAngle = (Date.now() * 0.0004) % (Math.PI * 2);
      sweepRef.current.rotation.y = sweepAngle;
      (sweepRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.08 + Math.sin(Date.now() * 0.002) * 0.04;
    }

    // Pulsing nodes
    if (hasPulsingNodes) {
      nodeRefs.current.forEach((node, i) => {
        if (node) {
          const pulse = 0.6 + Math.sin(Date.now() * 0.004 + i * 1.5) * 0.4;
          node.scale.setScalar(pulse);
          (node.material as THREE.MeshBasicMaterial).opacity = pulse * 0.8;
        }
      });
    }
  });

  return (
    <group ref={ref} rotation={tilt.map(v => v * Math.PI / 180) as any}>
      {segments.map((pts, i) => (
        <Line key={i} points={pts} color="#ff8800" lineWidth={lineWidth} transparent opacity={opacity} />
      ))}

      {/* Scan sweep wedge */}
      {hasScanSweep && (
        <mesh ref={sweepRef} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[radius + 0.05, 32, 0, Math.PI / 4]} />
          <meshBasicMaterial color="#ff6600" transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* Data nodes */}
      {nodePositions.map((pos, i) => (
        <mesh key={`node-${i}`} ref={(el) => { if (el) nodeRefs.current[i] = el; }} position={pos}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#ffaa33" transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
};

/* ── Scan Line (horizontal sweep across globe) ── */
const ScanLine = ({ radius }: { radius: number }) => {
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (!ref.current) return;
    const t = (Date.now() * 0.0002) % 1;
    const y = (t * 2 - 1) * radius;
    ref.current.position.y = y;
    const r = Math.sqrt(Math.max(0, radius * radius - y * y));
    ref.current.scale.set(r, 1, r);
    // Fade at edges
    ref.current.children.forEach((child) => {
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      if (mat) mat.opacity = 0.15 * (1 - Math.abs(y / radius));
    });
  });

  return (
    <group ref={ref}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.95, 1.05, 64]} />
        <meshBasicMaterial color="#ff8800" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

/* ── Main Globe ── */
const FuturisticGlobe = ({
  mouseTarget,
  isMobile,
}: {
  mouseTarget: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);
  const outerGlowRef = useRef<THREE.Mesh>(null!);
  const rimRef = useRef<THREE.Mesh>(null!);
  const targetRotation = useRef({ x: -0.2, y: -1.36 });
  const smoothRotation = useRef({ x: -0.2, y: -1.36 });
  const baseY = useRef(-1.36);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragRotation = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastPointer = useRef({ x: 0, y: 0, time: 0 });
  const raycaster = useRef(new THREE.Raycaster());
  const pointer = useRef(new THREE.Vector2());
  const { gl, camera } = useThree();

  const R = 1.6;

  // Hit-test sphere slightly larger than globe for comfortable interaction
  const hitSphere = useMemo(() => new THREE.Sphere(new THREE.Vector3(0, 0, 0), R + 0.3), []);

  const isPointerOnGlobe = useCallback((e: PointerEvent) => {
    const rect = gl.domElement.getBoundingClientRect();
    pointer.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.current.setFromCamera(pointer.current, camera);
    const target = new THREE.Vector3();
    return raycaster.current.ray.intersectSphere(hitSphere, target) !== null;
  }, [gl, camera, hitSphere]);

  useEffect(() => {
    const canvas = gl.domElement;
    const handleMove = (e: PointerEvent) => {
      // Update cursor based on proximity
      if (!isDragging.current) {
        canvas.style.cursor = isPointerOnGlobe(e) ? "grab" : "default";
        return;
      }
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      targetRotation.current.y = dragRotation.current.y + dx * 0.008;
      targetRotation.current.x = dragRotation.current.x + dy * 0.008;
      const now = performance.now();
      const dt = Math.max(now - lastPointer.current.time, 1);
      velocity.current.x = (e.clientY - lastPointer.current.y) / dt * 0.8;
      velocity.current.y = (e.clientX - lastPointer.current.x) / dt * 0.8;
      lastPointer.current = { x: e.clientX, y: e.clientY, time: now };
    };
    const handleDown = (e: PointerEvent) => {
      if (!isPointerOnGlobe(e)) return;
      isDragging.current = true;
      dragStart.current = { x: e.clientX, y: e.clientY };
      dragRotation.current = { x: targetRotation.current.x, y: targetRotation.current.y };
      lastPointer.current = { x: e.clientX, y: e.clientY, time: performance.now() };
      velocity.current = { x: 0, y: 0 };
      canvas.style.cursor = "grabbing";
    };
    const handleUp = () => {
      isDragging.current = false;
    };
    canvas.style.cursor = "default";
    canvas.addEventListener("pointerdown", handleDown);
    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerup", handleUp);
    canvas.addEventListener("pointerleave", handleUp);
    return () => {
      canvas.removeEventListener("pointerdown", handleDown);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerup", handleUp);
      canvas.removeEventListener("pointerleave", handleUp);
    };
  }, [gl]);

  
  const earthTexture = useLoader(THREE.TextureLoader, "/textures/earth-day.jpg");
  const bumpTexture = useLoader(THREE.TextureLoader, "/textures/earth-topology.png");

  const toVec3 = (lat: number, lng: number, r: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = lng * (Math.PI / 180);
    return new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
  };

  const cityLocations = useMemo(() => [
    [25.2, 55.3], [40.7, -74.0], [51.5, -0.1], [35.7, 139.7], [1.3, 103.8],
    [-33.9, 151.2], [37.8, -122.4], [19.1, 72.9], [31.2, 121.5], [48.9, 2.35],
    [55.8, 37.6], [-23.6, -46.6], [22.3, 114.2], [39.9, 116.4], [28.6, 77.2],
    [-1.3, 36.8], [41.0, 29.0], [13.8, 100.5], [37.6, 127.0], [34.1, -118.2],
  ], []);

  const dots = useMemo(() =>
    cityLocations.map(([lat, lng], i) => ({
      pos: toVec3(lat, lng, R + 0.02),
      delay: i * 0.4,
    })),
    [cityLocations]
  );

  const arcs = useMemo(() => {
    // Country-to-country connections across the globe
    const connections: [number, number][] = [
      // From India (Mumbai=7, Delhi=14)
      [7, 1],   // Mumbai → New York
      [7, 2],   // Mumbai → London
      [7, 0],   // Mumbai → Dubai
      [7, 3],   // Mumbai → Tokyo
      [7, 4],   // Mumbai → Singapore
      [7, 5],   // Mumbai → Sydney
      [7, 12],  // Mumbai → Hong Kong
      [14, 15], // Delhi → Nairobi
      [14, 10], // Delhi → Moscow
      [14, 16], // Delhi → Istanbul
      [14, 17], // Delhi → Bangkok
      [14, 9],  // Delhi → Paris
      // Other global routes
      [1, 2],   // New York → London
      [1, 6],   // New York → San Francisco
      [3, 8],   // Tokyo → Shanghai
      [4, 5],   // Singapore → Sydney
      [9, 11],  // Paris → São Paulo
      [6, 3],   // San Francisco → Tokyo
    ];
    return connections.map(([fi, ti], i) => {
      const from = cityLocations[fi], to = cityLocations[ti];
      const start = toVec3(from[0], from[1], R + 0.01);
      const end = toVec3(to[0], to[1], R + 0.01);
      const dist = start.distanceTo(end);
      const h = dist > 2.5 ? 1.7 : dist > 1.5 ? 1.5 : 1.3;
      const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(R * h);
      return { points: new THREE.QuadraticBezierCurve3(start, mid, end).getPoints(80), delay: i * 0.2 };
    });
  }, [cityLocations]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    
    if (!isDragging.current) {
      const friction = 0.92;
      velocity.current.x *= friction;
      velocity.current.y *= friction;
      
      const hasVelocity = Math.abs(velocity.current.x) > 0.00005 || Math.abs(velocity.current.y) > 0.00005;
      
      if (hasVelocity) {
        targetRotation.current.x += velocity.current.x * delta * 60;
        targetRotation.current.y += velocity.current.y * delta * 60;
        baseY.current = targetRotation.current.y;
      } else {
        // Slow idle rotation
        baseY.current += 0.12 * delta;
        targetRotation.current.y = baseY.current;
      }
      
      if (!isMobile && !hasVelocity) {
        targetRotation.current.x = THREE.MathUtils.lerp(
          targetRotation.current.x, -0.2 + mouseTarget.current.y * 0.3, 0.03
        );
        targetRotation.current.y = baseY.current + mouseTarget.current.x * 0.15;
      }
    } else {
      baseY.current = targetRotation.current.y;
    }
    
    // Smooth interpolation — higher factor = more responsive
    const lerpFactor = isDragging.current ? 0.25 : 0.08;
    smoothRotation.current.x = THREE.MathUtils.lerp(smoothRotation.current.x, targetRotation.current.x, lerpFactor);
    smoothRotation.current.y = THREE.MathUtils.lerp(smoothRotation.current.y, targetRotation.current.y, lerpFactor);
    groupRef.current.rotation.x = smoothRotation.current.x;
    groupRef.current.rotation.y = smoothRotation.current.y;

    if (atmosphereRef.current)
      atmosphereRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.0008) * 0.015);
    if (outerGlowRef.current)
      outerGlowRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.0006 + 1) * 0.01);
    if (rimRef.current)
      (rimRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.12 + Math.sin(Date.now() * 0.002) * 0.04;
  });

  return (
    <>
      <group ref={groupRef}>
        {/* Subtle teal atmosphere */}
        <Sphere ref={atmosphereRef} args={[R + 0.1, 64, 64]}>
          <meshBasicMaterial color="#ff9933" transparent opacity={0.08} side={THREE.BackSide} />
        </Sphere>

        {/* Teal wireframe grid — thinner, less dense */}
        <Sphere args={[R + 0.005, 48, 48]}>
          <meshBasicMaterial color="#ffaa44" transparent opacity={0.15} wireframe toneMapped={false} />
        </Sphere>

        {/* Earth base — brighter to show continents */}
        <Sphere args={[R, 64, 64]}>
          <meshBasicMaterial
            map={earthTexture}
            color="#bbaa88"
            toneMapped={false}
          />
        </Sphere>
        {/* Teal glow on land — stronger */}
        <Sphere args={[R + 0.002, 64, 64]}>
          <meshBasicMaterial
            map={earthTexture}
            color="#ff9933"
            transparent
            opacity={0.55}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </Sphere>

        {/* City dots */}
        {dots.map((d, i) => (
          <CityDot key={`c-${i}`} position={d.pos} delay={d.delay} />
        ))}

        {/* Connection arcs */}
        {arcs.map((arc, i) => (
          <AnimatedArc key={`a-${i}`} points={arc.points} delay={arc.delay} />
        ))}
      </group>
    </>
  );
};

/* ── Canvas ── */
interface GlobeSceneProps {
  mouseTarget: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
}

const GlobeScene = ({ mouseTarget, isMobile }: GlobeSceneProps) => (
  <Canvas
    camera={{ position: [0, 0, 5.2], fov: 45 }}
    dpr={[1, isMobile ? 1 : 1.5]}
    gl={{ antialias: true, alpha: true }}
    style={{ background: "transparent" }}
  >
    <ambientLight intensity={2.0} />
    <pointLight position={[5, 3, 5]} intensity={1.0} color="#ffaa44" />
    <pointLight position={[-3, -2, 4]} intensity={0.5} color="#ffcc88" />
    <FuturisticGlobe mouseTarget={mouseTarget} isMobile={isMobile} />
    <Preload all />
  </Canvas>
);

export default GlobeScene;
