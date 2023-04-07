import { CELL_TYPES } from "../Cell/types";
import { Grid } from "../Grid/Grid";

export class Controller {
  public constructor() {}
  private Grid = new Grid(5);

  public type: CELL_TYPES = CELL_TYPES.WALL;

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
}
