const normal = require("random-normal");

export function wait(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export function waitNormal(meanMs: number, stdDevMs: number): Promise<void> {
  return wait(normal({ mean: meanMs, dev: stdDevMs }));
}
