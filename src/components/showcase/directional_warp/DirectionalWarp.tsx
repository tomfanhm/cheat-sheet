import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import Banner from "./Banner";

const DirectionalWarp: React.FC = () => {
  const cam = useRef(null);
  return (
    <div className="canvas-container relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black p-0">
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <Banner />
        <OrthographicCamera
          ref={cam}
          makeDefault
          zoom={1}
          top={0.5}
          bottom={-0.5}
          left={-0.5}
          right={0.5}
          near={-10}
          far={10}
          position={[0, 0, 1]}
          manual
        />
      </Canvas>
    </div>
  );
};
export default DirectionalWarp;
