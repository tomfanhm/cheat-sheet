---
layout: ../../layouts/MarkdownContainer.astro
title: Three.js
description: Three.js is a powerful, lightweight, cross-browser JavaScript library/API used to create and display animated 3D computer graphics on a Web browser. These graphics can be interactive and can be created, in part, with the help of the WebGL API.
imageUrl: /images/three.png
date: Sep 7, 2023
datetime: 2023-09-07
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

### Animation Loop

```typescript
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

### GLTF Loader

```typescript
const loader = new THREE.GLTFLoader();
```
