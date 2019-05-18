import robot from "robotjs";
import iohook from "iohook";
import keycode from "keycode";
import { waitNormal } from "./wait";
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

let cursePosition: Vec2 = { x: 0, y: 0 };
let monkPosition: Vec2 = { x: 0, y: 0 };
let pause = false;
iohook.on("keydown", (evt: KeydownEvent) => {
  const key: string = keycode(evt.rawcode);
  console.log(key);
  if (key === "f1") {
    cursePosition = robot.getMousePos();
  } else if (key === "f2") {
    monkPosition = robot.getMousePos();
  }

  if (key === "numpad 4") {
    const x = cursePosition.x + normal({ mean: 0, dev: 5 });
    const y = cursePosition.y + normal({ mean: 0, dev: 5 });

    robot.moveMouse(x, y);
  }

  if (key === "numpad 5") {
    robot.mouseClick("left");
  }

  if (key === "numpad 6") {
    const x = monkPosition.x + normal({ mean: 0, dev: 5 });
    const y = monkPosition.y + normal({ mean: 0, dev: 5 });

    robot.moveMouse(x, y);
  }

  if (key === "numpad 0") {
    loop();
  }

  if (key === "esc") {
    pause = !pause;
  }
});

async function loop() {
  if (!pause) {
    await waitNormal(2400, 600);
    let x = cursePosition.x + normal({ mean: 0, dev: 5 });
    let y = cursePosition.y + normal({ mean: 0, dev: 5 });
    robot.moveMouse(x, y);
    await waitNormal(40, 10);
    robot.mouseClick("left");

    await waitNormal(40, 10);
    x = monkPosition.x + normal({ mean: 0, dev: 5 });
    y = monkPosition.y + normal({ mean: 0, dev: 5 });
    robot.moveMouse(x, y);
    await waitNormal(100, 50);
    robot.mouseClick("left");
    await waitNormal(20, 5);
    loop();
  }
}

iohook.start(false);
