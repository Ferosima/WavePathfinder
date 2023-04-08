import { makeAutoObservable } from 'mobx';
import { CELL_TYPES } from '../Cell/types';
import { Grid } from '../Grid/Grid';
import { SearchEngine } from '../SearchEngine/SearchEngine';

export class Controller {
  public type: CELL_TYPES = CELL_TYPES.WALL;

  private Grid = new Grid(3);

  public constructor() {
    makeAutoObservable(this);
    new SearchEngine(this.Grid, { x: 0, y: 0 });
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
  };

  public clearGrid = () => {
    this.Grid = new Grid(this.gridSize);
  };
}
