import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader"

interface BallCanvasProps {
  icon: string;
}

const Ball: React.FC<BallCanvasProps> = (props) => {
  const [decal] = useTexture([props.icon]);

  return (
    <Float speed={1.75} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.8]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
        color={"#FFF8EB"}
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading />
        <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25 ]}
        map={decal} />
      </mesh>
    </Float>
  )
}

const BallCanvas: React.FC<BallCanvasProps>= ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default BallCanvas