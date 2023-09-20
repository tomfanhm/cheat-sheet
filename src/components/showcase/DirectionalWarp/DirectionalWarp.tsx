import { Canvas } from "@react-three/fiber";
import React from "react";
import Banner from "./Banner";
import { OrthographicCamera } from "@react-three/drei";

const DirectionalWarp: React.FC = () => {
  return (
    <div className="canvas-container relative w-full aspect-[4/3] bg-black rounded-2xl overflow-hidden p-0">
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <Banner />
        <OrthographicCamera
          makeDefault
          zoom={1}
          top={0.5}
          bottom={-0.5}
          left={-0.5}
          right={0.5}
          near={-10}
          far={10}
          position={[0, 0, 1]}
        />
      </Canvas>
    </div>
  );
};
export default DirectionalWarp;
