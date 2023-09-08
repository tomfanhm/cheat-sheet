---
id: 8038a810
layout: ../../layouts/MarkdownContainer.astro
title: Three.js
description: Three.js is a powerful, lightweight, cross-browser JavaScript library/API used to create and display animated 3D computer graphics on a Web browser. These graphics can be interactive and can be created, in part, with the help of the WebGL API.
imageUrl: ../../assets/three.png
date: Sep 7, 2023
datetime: "2023-09-07"
category: Documentation
disable: false
---

### Scene

```typescript
const scene = new THREE.Scene();
```

### Camera

```typescript
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
```

### Renderer

```typescript
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  canvas: document.querySelector("canvas"),
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(devicePixelRatio);
```

### Resize Handler

```typescript
window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
```

### Animation Loop

```typescript
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

### Mesh

```typescript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const mesh = new THREE.Mesh(geometry, material);
```

### GLTF Loader

```typescript
const loader = new THREE.GLTFLoader();
```

### Texture Loader

```typescript
const textures = [
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/id/2/200/300",
].map((url) =>
  new THREE.TextureLoader().load(url, (texture) => {
    // Onload callback, do something
  })
);
```

### ShaderMaterial

```typescript
const uniforms = {
  uTime: { value: 1.0 },
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
uniform float uTime;

void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const fragmentShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
uniform float uTime;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;

const material = new THREE.ShaderMaterial({
  uniforms: uniforms,
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});
```

### Mouse Events

```typescript
const raycaster = new THREE.Raycaster();

window.addEventListener("mousemove", onMouseMove, false);

function onMouseMove(event) {
  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    // Object is being hovered
  } else {
    // No object is being hovered
  }
}
```
