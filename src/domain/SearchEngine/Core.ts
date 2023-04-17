import { CELL_TYPES, Coord } from "../../types";
import { Cell } from "../Cell/Cell";
import { Grid } from "../Grid/Grid";

export class Core {
  public grid: number[][] = [[]];
  public path: Coord[] = [];

  protected size: number;
  public constructor(grid: Grid, protected start: Coord, protected finish: Coord) {
    this.size = grid.size;
    this.grid = grid.grid.map((row) => row.map((cell) => this.defineCell(cell)));
  }

  protected checkCoord = (coord: number) => {
    return coord >= 0 && coord <= this.size - 1;
  };

  protected checkCoords = (coord: Coord, direction: Coord, diagonal?: boolean) => {
    const [currY, currX] = [coord.y + direction.y, coord.x + direction.x];

    // Сheck that neighboring cells are not wall
    if (diagonal && !(this.grid?.[currY]?.[coord.x] >= 0 || this.grid?.[coord.y]?.[currX] >= 0)) {
      return false;
    }
    return this.checkCoord(currY) && this.checkCoord(currX) && this.grid[currY][currX] === 0;
  };

  private defineCell = (cell: Cell) => {
    if (cell.type === CELL_TYPES.WALL) {
      return -1;
    }
    return 0;
  };
}
