import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
  }
`;
const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec2 uScale;
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
        
  void main() {
    float progress = abs(sin(uTime * 0.5));
    vec2 UV = vUv;
    UV = (UV - 0.5) / uScale + 0.5;
    float p = progress;
    p = smoothstep(0.0, 1.0, (p * 2.0 + UV.x - 1.0));
    vec2 a = (UV - 0.5) * (1.0 - p) + 0.5;
    vec2 b = (UV - 0.5) * p + 0.5;
    vec4 textureA = texture2D(uTexture1, a);
    vec4 textureB = texture2D(uTexture2, b);
    vec4 finalColor = mix(textureA, textureB, p);
    gl_FragColor = finalColor;
  }
`;

function getScale(width: number, height: number): THREE.Vector2 {
  const imageAspect = 841 / 467;
  const viewportAspect = width / height;
  if (imageAspect > viewportAspect) {
    return new THREE.Vector2(imageAspect / viewportAspect, 1);
  } else {
    return new THREE.Vector2(1, viewportAspect / imageAspect);
  }
}

const Banner: React.FC = () => {
  const { width, height } = useThree((state) => state.viewport);

  const [ryoiki, yuji] = useTexture([
    "/images/ryoiki.jpeg",
    "/images/yuji.jpeg",
  ]);

  const ref =
    useRef<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>>(null);

  useFrame((_, delta) => {
    if (ref && ref.current) {
      ref.current.material.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh
      position={[0, 0, 0]}
      ref={ref}
      material={
        new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0.0 },
            uScale: { value: getScale(width, height) },
            uTexture1: { value: ryoiki },
            uTexture2: { value: yuji },
          },
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          side: THREE.DoubleSide,
        })
      }
    >
      <planeGeometry args={[1, 1]} />
    </mesh>
  );
};
export default Banner;
