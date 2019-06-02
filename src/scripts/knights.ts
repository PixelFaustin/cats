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

let pouchSpot: Vec2 = { x: 0, y: 0 };
let toggle: boolean = false;
let count: number = 0;
iohook.on("keydown", (evt: KeydownEvent) => {
  const key: string = keycode(evt.rawcode);

  if (key === "numpad 5") {
    pouchSpot = robot.getMousePos();
  } else if (key === "numpad 4") {
    toggle = !toggle;
  }
});

async function loop() {
  if (toggle) {
    if (count === 125) {
      const original: Vec2 = robot.getMousePos();
      robot.moveMouse(pouchSpot.x, pouchSpot.y);
      await waitNormal(700, 100);
      robot.mouseClick("left");
      await waitNormal(30, 10);
      count = 0;
      await waitNormal(60, 20);
      robot.moveMouse(original.x, original.y);
    } else {
      count++;
      robot.mouseClick("left");
    }
  }

  await wait(100);
  loop();
}
loop();
iohook.start(false);
