/// <reference types="@webgpu/types" />
export {};
declare global {
    export interface GPUDevice {
        createShaderModule(descriptor: GPUShaderModuleDescriptor & {
            transform?: (code: any) => GPUShaderModuleDescriptor["code"];
        }): GPUShaderModule;
    }
}
