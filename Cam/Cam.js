/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cam extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("orange2-a", "./Cam/costumes/orange2-a.svg", {
        x: 49,
        y: 24
      }),
      new Costume("orange2-b", "./Cam/costumes/orange2-b.svg", { x: 49, y: 27 })
    ];

    this.sounds = [new Sound("pop", "./Cam/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 180;
    while (true) {
      this.y += -4;
      if (this.y < -160) {
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      if (this.touching(this.sprites["KhNgLong"].andClones())) {
        this.broadcast("chạm");
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      yield;
    }
  }
}
