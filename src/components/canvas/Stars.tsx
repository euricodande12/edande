import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import * as THREE from 'three';

const Stars = (props: any) => {
  // Specify the type of the ref as `THREE.Points`
  const ref = useRef<THREE.Points>(null);
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  })
  // Ensure sphere is a Float32Array
  const sphere = useMemo(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    if (!(positions instanceof Float32Array)) {
      throw new Error('Expected positions to be a Float32Array');
    }
    return positions;
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
     <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
      <PointMaterial
      transparent
      color="#F272C8"
      size={0.002}
      sizeAttenuation={true}
      depthWrite={false} />
     </Points>
    </group>
  )
};

const StarsCanvas = () => {
  return <div className="w-full h-full absolute inset-0  z-[-1]">
    <Canvas camera={{ position: [0, 0, 1]}}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>

      <Preload all />
    </Canvas>
  </div>;
};

export default StarsCanvas;
