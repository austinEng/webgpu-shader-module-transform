
/// <reference types="@webgpu/types" />

export {};

declare global {
  export interface GPUDevice {
    createShaderModule(descriptor: GPUShaderModuleDescriptor & {
      transform?: (code: any) => GPUShaderModuleDescriptor["code"],
    }): GPUShaderModule;
  }
}

if (navigator.gpu) {
  const originalCreateShaderModule = GPUDevice.prototype.createShaderModule;

  GPUDevice.prototype.createShaderModule = function createShaderModule(
    this: GPUDevice,
    desc: Parameters<typeof originalCreateShaderModule>[0]
  ): GPUShaderModule {
    if (typeof desc.transform === 'function') {
      desc = {
        label: desc.label,
        code: desc.transform(desc.code),
        sourceMap: desc.sourceMap,
      }
    }
    return originalCreateShaderModule!.call(this, desc);
  };
}
