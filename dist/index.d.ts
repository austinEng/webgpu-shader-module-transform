export declare type GPUShaderSource = any;
export declare type GPUShaderCode = Uint32Array;
export interface GPUShaderModuleDescriptorWithTransform extends GPUShaderModuleDescriptor {
    source: GPUShaderSource;
    transform: (source: GPUShaderSource) => GPUShaderCode;
}
export interface GPUDeviceWithShaderModuleDescriptorTransform extends GPUDevice {
    createShaderModule(descriptor: GPUShaderModuleDescriptorWithTransform): GPUShaderModule;
}
export default function install(): void;
