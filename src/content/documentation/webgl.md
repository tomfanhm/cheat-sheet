---
id: 400d798f
layout: ../../layouts/MarkdownContainer.astro
title: WebGL
description: GLSL, or the OpenGL Shading Language, is a high-level shading language with a syntax based on the C programming language.
imageUrl: ../../assets/webgl.png
date: Sep 30, 2023
datetime: "2023-09-30"
category: Documentation
disable: false
---

### Data Types

- It includes a variety of data types

| Data Type | Description                       | Example                                                            |
| --------- | --------------------------------- | ------------------------------------------------------------------ |
| `void`    | No type                           | `void main() {}`                                                   |
| `bool`    | Boolean, `true` or `false`        | `bool isTrue = true;`                                              |
| `int`     | Signed integer                    | `int myInt = 1;`                                                   |
| `float`   | Single-precision floating point   | `float myFloat = 1.0;`                                             |
| `vec2`    | 2-component floating point vector | `vec2 myVec2 = vec2(1.0, 2.0);`                                    |
| `vec3`    | 3-component floating point vector | `vec3 myVec3 = vec3(1.0, 2.0, 3.0);`                               |
| `vec4`    | 4-component floating point vector | `vec4 myVec4 = vec4(1.0, 2.0, 3.0, 4.0);`                          |
| `mat2`    | 2x2 floating point matrix         | `mat2 myMat2 = mat2(vec2(1, 2), vec2(3, 4));`                      |
| `mat3`    | 3x3 floating point matrix         | `mat3 myMat3 = mat3(vec3(1, 2, 3), vec3(4, 5, 6), vec3(7, 8, 9));` |

### Vertex Shader

- It processes each vertex of the 3D model and calculates their final positions on the screen

```glsl
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```

### Fragment Shader

- It takes the processed vertices from the vertex shader and interpolates the color for each pixel inside the triangle they form

```glsl
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    gl_FragColor = vec4(vPosition, 1.0);
}
```

### Uniform Textures

- Uniforms are read-only and set from the JavaScript side of your application
- They are used to send data to your shader that remains constant across a single draw call

```glsl
uniform sampler2D uTexture;

void main() {
    vec4 texColor = texture2D(uTexture, vUv);
    gl_FragColor = texColor;
}
```

<iframe height="500" style="width: 100%;" scrolling="no" title="Three.js Template" src="https://codepen.io/TomFanHM/embed/preview/WNLKwWX?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/TomFanHM/pen/WNLKwWX">
  Three.js Template</a> by Tom Fan (<a href="https://codepen.io/TomFanHM">@TomFanHM</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Uniform Cubemap Textures

- The `samplerCube` type is used for cubemap textures, which are textures that contain image data representing scenes in every direction (like the inside of a cube)

```glsl
uniform samplerCube uCubeMap;
varying vec3 vPosition;

void main() {
    vec4 texColor = textureCube(uCubeMap, vPosition);
    gl_FragColor = texColor;
}
```

### Simplex 2D

- Array and textureless GLSL 2D simplex noise function

<iframe height="500" style="width: 100%;" scrolling="no" title="Simplex 2D" src="https://codepen.io/TomFanHM/embed/preview/rNorLWg?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/TomFanHM/pen/rNorLWg">
  Simplex 2D</a> by Tom Fan (<a href="https://codepen.io/TomFanHM">@TomFanHM</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```glsl
//
// Description : Array and textureless GLSL 2D simplex noise function.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

```

### Simplex 3D

- Array and textureless GLSL 2D/3D/4D simplex noise functions

<iframe height="500" style="width: 100%;" scrolling="no" title="Simplex 3D" src="https://codepen.io/TomFanHM/embed/preview/GRPBqmE?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/TomFanHM/pen/GRPBqmE">
  Simplex 3D</a> by Tom Fan (<a href="https://codepen.io/TomFanHM">@TomFanHM</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```glsl
//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }
```

### Fractional Brownian Motion

- FBM is used to create noise with a more natural look and feel compared to standard noise
- This is achieved by layering or "stacking" multiple layers of noise on top of each other, each with a different frequency and amplitude

<iframe height="500" style="width: 100%;" scrolling="no" title="Fractional Brownian Motion" src="https://codepen.io/TomFanHM/embed/preview/LYMBZrR?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/TomFanHM/pen/LYMBZrR">
  Fractional Brownian Motion</a> by Tom Fan (<a href="https://codepen.io/TomFanHM">@TomFanHM</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```glsl
float fbm(float x) {
  float v = 0.0;
  float a = 0.5;
  float shift = float(100);
  for (int i = 0; i < NUM*OCTAVES; ++i) {
  v += a * noise(x);
  x = x \_ 2.0 + shift;
  a \*= 0.5;
  }
  return v;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100);
  // Rotate to reduce axial bias
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
  for (int i = 0; i < NUM*OCTAVES; ++i) {
  v += a * noise(x);
  x = rot _ x _ 2.0 + shift;
  a \_= 0.5;
  }
  return v;
}

float fbm(vec3 x) {
  float v = 0.0;
  float a = 0.5;
  vec3 shift = vec3(100);
  for (int i = 0; i < NUM*OCTAVES; ++i) {
  v += a * noise(x);
  x = x \_ 2.0 + shift;
  a \*= 0.5;
  }
  return v;
}

```
