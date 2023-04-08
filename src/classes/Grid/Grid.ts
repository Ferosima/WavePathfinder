import { Cell } from '../Cell/Cell';
import { CELL_TYPES } from '../Cell/types';

export class Grid {
  public grid: Cell[][];

  public constructor(public size: number, way?: { x: number; y: number; distance: number }[]) {
    // Fill a grid of a certain size
    this.grid = new Array(size)
      .fill([])
      .map((itemX, x) =>
        new Array(size).fill(null).map((itemY, y) => new Cell(x, y, this.defineType(x, y, way))),
      );
  }

  public selectCellType = (x: number, y: number, type: CELL_TYPES) => {
    if (this.grid?.[x]?.[y]) this.grid[x][y].selectType(type);
  };

  private defineType = (x: number, y: number, way?: { x: number; y: number }[]) => {
    if ((x === 0 && y === 0) || (x === this.size - 1 && y === this.size - 1))
      return CELL_TYPES.DESTINATION;

    if (way?.some((step) => step.x === x && step.y === y)) {
      return CELL_TYPES.WAY;
    }
    return CELL_TYPES.CELL;
  };
}
