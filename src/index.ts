
export type GPUShaderSource = any;
export type GPUShaderCode = Uint32Array;

export interface GPUShaderModuleDescriptorWithTransform extends GPUShaderModuleDescriptor {
    source: GPUShaderSource;
    transform: (source: GPUShaderSource) => GPUShaderCode;
}

export interface GPUDeviceWithShaderModuleDescriptorTransform extends GPUDevice {
    createShaderModule(descriptor: GPUShaderModuleDescriptorWithTransform): GPUShaderModule;
}

let originalCreateShaderModule: GPUDevice["createShaderModule"] = undefined!;
if (navigator.gpu) {
    // @ts-ignore
    originalCreateShaderModule = GPUDevice.prototype.createShaderModule;
}

const tmp: GPUShaderModuleDescriptor = { code: undefined!, label: undefined };

function createShaderModule(this: GPUDeviceWithShaderModuleDescriptorTransform,
                            desc: GPUShaderModuleDescriptorWithTransform): GPUShaderModule {
    if (desc.transform && desc.source) {
        tmp.code = desc.transform(desc.source);
    } else {
        tmp.code = desc.code;
    }
    return originalCreateShaderModule.call(this, tmp);
}


export default function install() {
    if (!navigator.gpu || originalCreateShaderModule === createShaderModule) return;
    // @ts-ignore
    GPUDevice.prototype.createShaderModule = createShaderModule;
}
