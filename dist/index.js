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
let isKnockingOut = false;
iohook_1.default.on("keydown", (evt) => {
    const key = keycode_1.default(evt.rawcode);
    if (key === "numpad 4") {
        isKnockingOut = true;
        knockout().then(() => {
            isKnockingOut = false;
        });
    }
    else if (key === "numpad 5") {
        pickpocket();
    }
});
function knockout() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentPosition = robotjs_1.default.getMousePos();
        robotjs_1.default.mouseClick("right");
        yield wait_1.wait(50);
        robotjs_1.default.moveMouse(currentPosition.x, currentPosition.y + 67);
        yield wait_1.wait(50);
        robotjs_1.default.mouseClick("left");
        yield wait_1.wait(30);
        robotjs_1.default.moveMouse(currentPosition.x, currentPosition.y);
    });
}
function pickpocket() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentPosition = robotjs_1.default.getMousePos();
        robotjs_1.default.mouseClick("right");
        yield wait_1.wait(50);
        robotjs_1.default.moveMouse(currentPosition.x, currentPosition.y + 39);
        yield wait_1.wait(50);
        robotjs_1.default.mouseClick("left");
        yield wait_1.wait(30);
        robotjs_1.default.moveMouse(currentPosition.x, currentPosition.y);
        yield wait_1.wait(800);
        pickpocket2();
    });
}
function pickpocket2() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentPosition = robotjs_1.default.getMousePos();
        robotjs_1.default.mouseClick("right");
        yield wait_1.wait(50);
        robotjs_1.default.moveMouse(currentPosition.x, currentPosition.y + 39);
        yield wait_1.wait(50);
        robotjs_1.default.mouseClick("left");
        yield wait_1.wait(30);
        robotjs_1.default.moveMouse(currentPosition.x, currentPosition.y);
    });
}
iohook_1.default.start(false);
//# sourceMappingURL=index.js.map