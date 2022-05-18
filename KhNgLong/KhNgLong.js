/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KhNgLong extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dinosaur4-a", "./KhNgLong/costumes/dinosaur4-a.svg", {
        x: 60,
        y: 52
      }),
      new Costume("dinosaur4-b", "./KhNgLong/costumes/dinosaur4-b.svg", {
        x: 87,
        y: 52
      }),
      new Costume("dinosaur4-c", "./KhNgLong/costumes/dinosaur4-c.svg", {
        x: 59,
        y: 52
      }),
      new Costume("dinosaur4-d", "./KhNgLong/costumes/dinosaur4-d.svg", {
        x: 89,
        y: 88
      })
    ];

    this.sounds = [new Sound("pop", "./KhNgLong/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(Trigger.BROADCAST, { name: "chạm" }, this.whenIReceiveChM),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenKeyRightArrowPressed() {
    this.direction = 90;
    yield* this.diChuyN(15);
  }

  *whenKeyLeftArrowPressed() {
    this.direction = -90;
    yield* this.diChuyN(15);
  }

  *whenIReceiveChM() {
    this.stage.vars.score += 1;
    yield* this.startSound("pop");
    for (let i = 0; i < 4; i++) {
      yield* this.wait(0.02);
      this.costumeNumber += 1;
      yield;
    }
    if (this.stage.vars.score == 10) {
      yield* this.sayAndWait("Chiến thắng", 2);
      /* TODO: Implement stop all */ null;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    this.costume = "dinosaur4-a";
  }

  *diChuyN(bC) {
    this.move(bC);
  }
}
