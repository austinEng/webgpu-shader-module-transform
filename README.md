# WebGPU Shader Module Transform

## Overview

`webgpu-shader-module-transform` is a light polyfill which extends the `GPUShaderModuleDescriptor` of the [WebGPU API](https://gpuweb.github.io/gpuweb/) to support `source` and `transform` arguments.

```typescript
type GPUShaderSource = any;
type GPUShaderCode = Uint32Array;

interface GPUShaderModuleDescriptorWithTransform extends GPUShaderModuleDescriptor {
    source: GPUShaderSource;
    transform: (source: GPUShaderSource) => GPUShaderCode;
}
```

If `source` and `transform` are provided in a call to `GPUDevice.createShaderModule`, `transform` is invoked on `source` and set as the `code` member of the `GPUShaderModuleDescriptor`.
