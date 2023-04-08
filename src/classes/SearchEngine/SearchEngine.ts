import { Cell } from '../Cell/Cell';
import { CELL_TYPES } from '../Cell/types';
import { Grid } from '../Grid/Grid';

type Coord = { x: number; y: number };
const neighborhoods: Coord[] = [
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: 0 },
  { x: 1, y: -1 },
  { x: 0, y: -1 },
  { x: -1, y: -1 },
  { x: -1, y: 0 },
  { x: 1, y: -1 },
];

export class SearchEngine {
  private grid: (number | undefined)[][];
  private size: number;
  public constructor(grid: Grid, private start: { x: number; y: number }) {
    this.size = grid.size;
    this.grid = grid.grid.map((row) => row.map((cell) => this.defineCell(cell)));

    this.findWay(start.y, start.x, 1, 1);
  }

  public findWay = async (x: number, y: number, distance: number, step: number) => {
    try {
      if (step == 4) return;
      console.info(this.grid);
      // while ((this.checkCoord(x) && this.checkCoord(y) && this.grid[y][x] !== 0) || isStart) {
      neighborhoods.forEach((coord: Coord) => {
        const [currY, currX] = [y + coord.y, x + coord.x];
        // console.log(
        //   currX,
        //   currY,
        //   step,
        //   this.checkCoords(currX, currY),
        //   this.grid?.[currY]?.[currX],
        // );
        if (this.checkCoords(currX, currY)) {
          this.grid[currY][currX] = distance;
          // this.findWay(currX, currY, distance + 1, step + 1);
        }
      });
      neighborhoods.forEach((coord: Coord) => {
        const [currY, currX] = [y + coord.y, x + coord.x];
        // console.info(currX, currY, distance, coord, this.checkCoords(currX, currY));
        if (this.checkCoord(currX) && this.checkCoord(currY))
          this.findWay(currX, currY, distance + 1, step + 1);
      });
    } catch (err) {
      console.error(x, y, this.grid[y][x], err);
    }
  };

  public wavePropagation = () => {};

  private defineCell = (cell: Cell) => {
    if (cell.type === CELL_TYPES.DESTINATION) {
      return 0;
    }
    if (cell.type === CELL_TYPES.WALL) {
      return -1;
    }
  };

  private checkCoord = (coord: number) => {
    return coord >= 0 && coord <= this.size - 1;
  };

  private checkCoords = (x: number, y: number) => {
    return this.checkCoord(x) && this.checkCoord(y) && typeof this.grid[y][x] === 'undefined';
  };
}
