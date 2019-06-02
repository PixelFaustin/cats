import robot from "robotjs";
import iohook from "iohook";
import keycode from "keycode";
import { waitNormal, wait } from "./wait";
const normal = require("random-normal");

interface KeydownEvent {
  shiftKey: boolean;
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  keycode: number;
  rawcode: number;
  type: string;
}

interface Vec2 {
  x: number;
  y: number;
}

let isKnockingOut = false;

iohook.on("keydown", (evt: KeydownEvent) => {
  const key: string = keycode(evt.rawcode);

  if (key === "numpad 4") {
    robot.keyTap("backspace");
    isKnockingOut = true;
    knockout().then(() => {
      isKnockingOut = false;
    });
  } else if (key === "numpad 5") {
    robot.keyTap("backspace");
    pickpocket();
  }
});

async function knockout() {
  const currentPosition: Vec2 = robot.getMousePos();
  robot.mouseClick("right");
  await wait(50);
  robot.moveMouse(currentPosition.x, currentPosition.y + 67);
  await wait(50);
  robot.mouseClick("left");
  await wait(30);
  robot.moveMouse(currentPosition.x, currentPosition.y);
}

async function pickpocket() {
  const currentPosition: Vec2 = robot.getMousePos();
  robot.mouseClick("right");
  await wait(50);
  robot.moveMouse(currentPosition.x, currentPosition.y + 39);
  await wait(50);
  robot.mouseClick("left");
  await wait(30);
  robot.moveMouse(currentPosition.x, currentPosition.y);
  await wait(800);

  pickpocket2();
}

async function pickpocket2() {
  const currentPosition: Vec2 = robot.getMousePos();
  robot.mouseClick("right");
  await wait(50);
  robot.moveMouse(currentPosition.x, currentPosition.y + 39);
  await wait(50);
  robot.mouseClick("left");
  await wait(30);
  robot.moveMouse(currentPosition.x, currentPosition.y);
}

iohook.start(false);
