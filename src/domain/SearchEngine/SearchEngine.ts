import { Coord } from '../../types';
import { Grid } from '../Grid/Grid';
import { Core } from './Core';

const neighborhoods: Coord[] = [
  { x: 0, y: 1 },
  // { x: 1, y: 1 },
  { x: 1, y: 0 },
  // { x: 1, y: -1 },
  { x: 0, y: -1 },
  // { x: -1, y: -1 },
  { x: -1, y: 0 },
  // { x: -1, y: 1 },
];

export class SearchEngine extends Core {
  public constructor(grid: Grid, start: Coord, finish: Coord) {
    super(grid, start, finish);

    this.generateWave();
  }

  public generateWave = () => {
    // Mark start coord
    this.grid[this.start.y][this.start.x] = 1;
    let distance = 1;
    /** Is possible to share the wave */
    let isPossible = true;

    while (this.grid[this.finish.y][this.finish.x] === 0 && isPossible) {
      isPossible = false;

      this.grid.forEach((row, y) =>
        row.forEach((cell, x) => {
          // Find cell with the same distance
          if (this.grid[y][x] == distance) {
            // Check neighbor cells
            neighborhoods.forEach((coord: Coord) => {
              const [currY, currX] = [y + coord.y, x + coord.x];

              if (this.checkCoords(currX, currY)) {
                this.grid[currY][currX] = distance + 1;
                isPossible = true;
              }
            });
          }
        }),
      );
      distance += 1;
    }
  };

  public findShortestPath = () => {
    const path: Coord[] = [];

    // Check if there is a path
    if (this.grid[this.finish.y][this.finish.x] === 0) {
      return path;
    }

    let [x, y] = [this.finish.x, this.finish.y];

    while (x !== this.start.x || y !== this.start.y) {
      // Add the current coordinates to the path
      path.unshift({ x, y });

      // Find the cell with the minimum distance among neighbors
      let minDistance = this.grid[y][x];
      let minCoord: Coord | undefined;

      neighborhoods.forEach((coord: Coord) => {
        const [currY, currX] = [y + coord.y, x + coord.x];

        if (
          this.checkCoord(currX) &&
          this.checkCoord(currY) &&
          this.grid[currY][currX] < minDistance &&
          this.grid[currY][currX] > 0
        ) {
          minDistance = this.grid[currY][currX];
          minCoord = { x: currX, y: currY };
        }
      });

      // Move to the cell with the minimum distance
      if (minCoord) {
        [x, y] = [minCoord.x, minCoord.y];
      } else {
        // There is no path to the start
        return [];
      }
    }
    // Add the start coordinates to the path
    path.unshift({ x: this.start.x, y: this.start.y });

    this.path = path;
  };
}
