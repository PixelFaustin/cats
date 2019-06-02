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
const wait_1 = require("../wait");
const normal = require("random-normal");
let pouchSpot = { x: 0, y: 0 };
let toggle = false;
let count = 0;
iohook_1.default.on("keydown", (evt) => {
    const key = keycode_1.default(evt.rawcode);
    if (key === "numpad 5") {
        pouchSpot = robotjs_1.default.getMousePos();
    }
    else if (key === "numpad 4") {
        toggle = !toggle;
    }
});
function loop() {
    return __awaiter(this, void 0, void 0, function* () {
        if (toggle) {
            if (count === 125) {
                const original = robotjs_1.default.getMousePos();
                robotjs_1.default.moveMouse(pouchSpot.x, pouchSpot.y);
                yield wait_1.waitNormal(700, 100);
                robotjs_1.default.mouseClick("left");
                yield wait_1.waitNormal(30, 10);
                count = 0;
                yield wait_1.waitNormal(60, 20);
                robotjs_1.default.moveMouse(original.x, original.y);
            }
            else {
                count++;
                robotjs_1.default.mouseClick("left");
            }
        }
        yield wait_1.wait(100);
        loop();
    });
}
loop();
iohook_1.default.start(false);
//# sourceMappingURL=knights.js.map