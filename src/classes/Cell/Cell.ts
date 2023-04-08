import { CELL_TYPES } from './types';
import { action, makeObservable, observable } from 'mobx';

export class Cell {
  public type: CELL_TYPES = CELL_TYPES.CELL;

  public constructor(public x: number, public y: number, type?: CELL_TYPES) {
    makeObservable(this, { selectType: action, type: observable });
    if (type) this.type = type;
  }

  public selectType = (type: CELL_TYPES) => {
    if (this.type !== type) {
      this.type = type;
    } else {
      this.type = CELL_TYPES.CELL;
    }
  };
}
