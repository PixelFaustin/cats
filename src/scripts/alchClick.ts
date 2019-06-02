import robot from "robotjs";
import iohook from "iohook";
import keycode from "keycode";
import { waitNormal, wait } from "../wait";
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

let alchSpot: Vec2 = undefined;

iohook.on("keydown", (evt: KeydownEvent) => {
  const key: string = keycode(evt.rawcode);

  if (key === "numpad 5") {
    alchSpot = robot.getMousePos();
  } else if (key === "numpad 4") {
    alch();
  }
});

async function alch() {
  const originalSpot: Vec2 = robot.getMousePos();
  robot.mouseClick("left");
  await wait(15);
  robot.moveMouse(alchSpot.x, alchSpot.y);
  await wait(30);
  robot.mouseClick("left");
  await wait(30);
  robot.mouseClick("left");
  await wait(30);
  robot.moveMouse(originalSpot.x, originalSpot.y);
  await wait(30);
  robot.mouseClick("left");
}
iohook.start(false);
