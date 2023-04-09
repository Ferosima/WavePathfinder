import { makeAutoObservable } from 'mobx';
import { Cell } from '../Cell/Cell';
import { CELL_TYPES, Coord } from '../../types';

export class Grid {
  public grid: Cell[][];

  public constructor(public size: number, way?: { x: number; y: number; distance: number }[]) {
    // Fill a grid of a certain size
    makeAutoObservable(this);
    this.grid = new Array(size)
      .fill([])
      .map((itemX, y) =>
        new Array(size)
          .fill(null)
          .map((itemY, x) => new Cell(x, y, this.defineTypeOfCell(x, y, way))),
      );
  }

  public selectCellType = (y: number, x: number, type: CELL_TYPES) => {
    if (this.grid?.[y]?.[x]) this.grid[y][x].selectType(type);
  };

  /** Set distance to ever cell */
  public fillWaveDistanceGrid = (grid: number[][]) => {
    grid.forEach((row, y) => {
      row.forEach((cell, x) => this.grid[y][x].setDistance(cell));
    });
  };

  /** Clear old path and write new */
  public fillPathGrid = (path: Coord[]) => {
    this.clearOldPath();
    // Write new path
    path.forEach((coord) => {
      this.selectCellType(coord.y, coord.x, CELL_TYPES.WAY);
    });
  };

  private defineTypeOfCell = (x: number, y: number, way?: { x: number; y: number }[]) => {
    if (way?.some((step) => step.x === x && step.y === y)) {
      return CELL_TYPES.WAY;
    }
    return CELL_TYPES.CELL;
  };

  /** Go through the list and clear all fields with type way */
  private clearOldPath = () => {
    this.grid.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (this.grid[y][x].type === CELL_TYPES.WAY) {
          this.grid[y][x].selectType(CELL_TYPES.CELL);
        }
      });
    });
  };
}
