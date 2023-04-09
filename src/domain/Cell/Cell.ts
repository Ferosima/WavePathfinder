import { makeAutoObservable } from 'mobx';
import { CELL_TYPES } from '../../types';

export class Cell {
  public constructor(
    public y: number,
    public x: number,
    public type: CELL_TYPES = CELL_TYPES.CELL,
    public distance?: number,
  ) {
    makeAutoObservable(this);
    if (type) this.type = type;
  }

  public selectType = (type: CELL_TYPES) => {
    if (this.type == CELL_TYPES.DESTINATION) {
      return;
    } else if (this.type !== type || type == CELL_TYPES.WAY) {
      this.type = type;
    } else {
      this.type = CELL_TYPES.CELL;
    }
  };

  public setDistance = (distance: number) => {
    this.distance = distance;
  };
}
