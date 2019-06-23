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

function moveMouse(destination: Vec2): void {
  robot.moveMouse(destination.x, destination.y);
}

let herbSpot: Vec2 = undefined;
let tarSpot: Vec2 = undefined;
let dropSpot: Vec2 = undefined;
let toggle = false;
iohook.on("keydown", (evt: KeydownEvent) => {
  const key: string = keycode(evt.rawcode);

  if (key === "numpad 7") {
    herbSpot = robot.getMousePos();
  } else if (key === "numpad 8") {
    tarSpot = robot.getMousePos();
  } else if (key === "numpad 9") {
    dropSpot = robot.getMousePos();
  }

  if (key === "numpad 5") {
    toggle = !toggle;
  }
});

async function fish() {
  while (true) {
    if (toggle) {
      const fishSpot = robot.getMousePos();
      moveMouse(tarSpot);
      await waitNormal(50, 5);
      robot.mouseClick("left");
      await waitNormal(50, 5);
      moveMouse(herbSpot);
      await waitNormal(50, 5);
      robot.mouseClick("left");
      await waitNormal(50, 5);
      moveMouse(dropSpot);
      await waitNormal(50, 5);
      robot.mouseClick("right");
      await waitNormal(50, 5);
      moveMouse({ x: dropSpot.x, y: dropSpot.y + 40 });
      await waitNormal(50, 5);
      robot.mouseClick("left");
      await waitNormal(50, 5);

      await waitNormal(50, 5);
      moveMouse(fishSpot);
      await waitNormal(115, 5);
      robot.mouseClick("left");
      await waitNormal(600 * 3, 0);
    }
    await waitNormal(50, 10);
  }
}

fish();

iohook.start(false);
