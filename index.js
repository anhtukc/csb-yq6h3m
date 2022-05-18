import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import KhNgLong from "./KhNgLong/KhNgLong.js";
import Cam from "./Cam/Cam.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  KhNgLong: new KhNgLong({
    x: 140,
    y: -93,
    direction: -90,
    costumeNumber: 1,
    size: 60,
    visible: true
  }),
  Cam: new Cam({
    x: 5,
    y: -4,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
