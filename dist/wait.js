"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const normal = require("random-normal");
function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
exports.wait = wait;
function waitNormal(meanMs, stdDevMs) {
    return wait(normal({ mean: meanMs, dev: stdDevMs }));
}
exports.waitNormal = waitNormal;
//# sourceMappingURL=wait.js.map