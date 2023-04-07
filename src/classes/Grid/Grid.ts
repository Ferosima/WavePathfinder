import { Cell } from "../Cell/Cell";
import { CELL_TYPES } from "../Cell/types";

export class Grid {
  public constructor(size: number) {
    // Fill a grid of a certain size
    this.grid = new Array(size)
      .fill([])
      .map((item, x) =>
        new Array(size).fill(null).map((item, y) => new Cell(x, y))
      );
  }

  public grid: Cell[][];

  public selectCellType = (x: number, y: number, type: CELL_TYPES) => {
    if (this.grid?.[x]?.[y]) this.grid[x][y].selectType(type);
  };
}
