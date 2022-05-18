/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Jurassic", "./Stage/costumes/Jurassic.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Jurassic2", "./Stage/costumes/Jurassic2.svg", {
        x: 351,
        y: 185
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.biNCATI = 1;
    this.vars.score = 1;
  }
}
