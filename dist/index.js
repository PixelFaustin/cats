"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const robotjs_1 = __importDefault(require("robotjs"));
const iohook_1 = __importDefault(require("iohook"));
const keycode_1 = __importDefault(require("keycode"));
const wait_1 = require("./wait");
const normal = require("random-normal");
let cursePosition = { x: 0, y: 0 };
let monkPosition = { x: 0, y: 0 };
let pause = false;
iohook_1.default.on("keydown", (evt) => {
    const key = keycode_1.default(evt.rawcode);
    console.log(key);
    if (key === "f1") {
        cursePosition = robotjs_1.default.getMousePos();
    }
    else if (key === "f2") {
        monkPosition = robotjs_1.default.getMousePos();
    }
    if (key === "numpad 4") {
        const x = cursePosition.x + normal({ mean: 0, dev: 5 });
        const y = cursePosition.y + normal({ mean: 0, dev: 5 });
        robotjs_1.default.moveMouse(x, y);
    }
    if (key === "numpad 5") {
        robotjs_1.default.mouseClick("left");
    }
    if (key === "numpad 6") {
        const x = monkPosition.x + normal({ mean: 0, dev: 5 });
        const y = monkPosition.y + normal({ mean: 0, dev: 5 });
        robotjs_1.default.moveMouse(x, y);
    }
    if (key === "numpad 0") {
        loop();
    }
    if (key === "esc") {
        pause = !pause;
    }
});
function loop() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!pause) {
            yield wait_1.waitNormal(2400, 600);
            let x = cursePosition.x + normal({ mean: 0, dev: 5 });
            let y = cursePosition.y + normal({ mean: 0, dev: 5 });
            robotjs_1.default.moveMouse(x, y);
            yield wait_1.waitNormal(40, 10);
            robotjs_1.default.mouseClick("left");
            yield wait_1.waitNormal(40, 10);
            x = monkPosition.x + normal({ mean: 0, dev: 5 });
            y = monkPosition.y + normal({ mean: 0, dev: 5 });
            robotjs_1.default.moveMouse(x, y);
            yield wait_1.waitNormal(100, 50);
            robotjs_1.default.mouseClick("left");
            yield wait_1.waitNormal(20, 5);
            loop();
        }
    });
}
iohook_1.default.start(false);
//# sourceMappingURL=index.js.map