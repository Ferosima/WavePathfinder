import { makeAutoObservable } from 'mobx';
import { CELL_TYPES } from '../Cell/types';
import { Grid } from '../Grid/Grid';

export class Controller {
  public type: CELL_TYPES = CELL_TYPES.WALL;

  private Grid = new Grid(5);

  public constructor() {
    makeAutoObservable(this);
  }

  public get grid() {
    return this.Grid.grid;
  }

  public get gridSize() {
    return this.Grid.size;
  }

  public selectCell = (x: number, y: number) => {
    this.Grid.selectCellType(x, y, this.type);
  };

  public selectType = (type: CELL_TYPES) => {
    this.type = type;
  };

  public makeGrid = (size: number) => {
    this.Grid = new Grid(size);
    console.info('size', this.gridSize, size);
  };
}
