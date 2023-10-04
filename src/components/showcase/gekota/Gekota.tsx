import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "./Model";
import Background from "./Background";
import Stars from "./Stars";

const Gekota: React.FC = () => {
  return (
    <div className="canvas-container relative w-full aspect-[4/3] bg-black rounded-2xl overflow-hidden p-0">
      <Canvas
        shadows
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <PerspectiveCamera position={[0, 0, 20]} fov={75} />
        <OrbitControls target={[0, 0, 0]} />
        <spotLight position={[10, 10, 10]} />
        <ambientLight />
        <Background />
        <Stars />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Gekota;
