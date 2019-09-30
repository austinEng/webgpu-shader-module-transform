
let originalCreateShaderModule = undefined;
if (navigator.gpu) {
    originalCreateShaderModule = GPUDevice.prototype.createShaderModule;
}

const tmp = { code: undefined };
function createShaderModule(desc) {
    if (desc.compile) {
        tmp.code = desc.compile(desc.code);
    } else {
        tmp.code = desc.code;
    }
    return originalCreateShaderModule.call(this, tmp);
}

export default function install() {
    if (!navigator.gpu || originalCreateShaderModule === createShaderModule) return;
    GPUDevice.prototype.createShaderModule = createShaderModule;
}
