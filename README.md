# WebGPU Shader Module Transform

## Overview

`webgpu-shader-module-transform` is a light polyfill which extends the `GPUShaderModuleDescriptor` of the [WebGPU API](https://gpuweb.github.io/gpuweb/) to support an optional `transform` member.

```typescript
interface GPUDevice {
  createShaderModule(descriptor: GPUShaderModuleDescriptor & {
    transform?: (code: any) => GPUShaderModuleDescriptor["code"],
  }): GPUShaderModule;
}
```

If `transform` is provided in a call to `GPUDevice.createShaderModule`, `transform` is invoked on `code` and the result is replaced as the `code` member of the `GPUShaderModuleDescriptor`.
