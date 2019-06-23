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
function moveMouse(destination) {
    robotjs_1.default.moveMouse(destination.x, destination.y);
}
let herbSpot = undefined;
let tarSpot = undefined;
let dropSpot = undefined;
let toggle = false;
iohook_1.default.on("keydown", (evt) => {
    const key = keycode_1.default(evt.rawcode);
    if (key === "numpad 7") {
        herbSpot = robotjs_1.default.getMousePos();
    }
    else if (key === "numpad 8") {
        tarSpot = robotjs_1.default.getMousePos();
    }
    else if (key === "numpad 9") {
        dropSpot = robotjs_1.default.getMousePos();
    }
    if (key === "numpad 5") {
        toggle = !toggle;
    }
});
function fish() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            if (toggle) {
                const fishSpot = robotjs_1.default.getMousePos();
                moveMouse(tarSpot);
                yield wait_1.waitNormal(50, 5);
                robotjs_1.default.mouseClick("left");
                yield wait_1.waitNormal(50, 5);
                moveMouse(herbSpot);
                yield wait_1.waitNormal(50, 5);
                robotjs_1.default.mouseClick("left");
                yield wait_1.waitNormal(50, 5);
                moveMouse(dropSpot);
                yield wait_1.waitNormal(50, 5);
                robotjs_1.default.mouseClick("right");
                yield wait_1.waitNormal(50, 5);
                moveMouse({ x: dropSpot.x, y: dropSpot.y + 40 });
                yield wait_1.waitNormal(50, 5);
                robotjs_1.default.mouseClick("left");
                yield wait_1.waitNormal(50, 5);
                yield wait_1.waitNormal(50, 5);
                moveMouse(fishSpot);
                yield wait_1.waitNormal(115, 5);
                robotjs_1.default.mouseClick("left");
                yield wait_1.waitNormal(600 * 3, 0);
            }
            yield wait_1.waitNormal(50, 10);
        }
    });
}
fish();
iohook_1.default.start(false);
//# sourceMappingURL=3tfish.js.map