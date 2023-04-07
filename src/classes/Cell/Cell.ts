import { action, makeObservable, observable } from "mobx";
import { CELL_TYPES } from "./types";

export class Cell {
  public constructor(public x: number, public y: number, filled?: boolean) {
    makeObservable(this, { type: observable, selectType: action });
  }

  public type: CELL_TYPES = CELL_TYPES.CELL;

  public selectType = (type: CELL_TYPES) => {
    this.type = type;
  };
}
