export const activationFunctions = {
    'ReLU': { primitive: ReLU, derivative: derivedReLU }
}

function ReLU(value: number) {
    return value > 0 ? value : 0
}

function derivedReLU(value: number) {
    return value > 0 ? 1 : 0
}