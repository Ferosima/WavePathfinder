import { makeAutoObservable } from 'mobx';
import { CELL_TYPES } from '../Cell/types';
import { Grid } from '../Grid/Grid';
import { SearchEngine } from '../SearchEngine/SearchEngine';

type Coord = { x: number; y: number };

export class Controller {
  public type: CELL_TYPES = CELL_TYPES.WALL;
  private size = 3;

  private Grid = new Grid(this.size);

  private start: Coord = { x: 0, y: 0 };
  private finish: Coord = { x: 2, y: 2 };

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

  public selectSize = (size: number) => {
    this.size = size;
    this.makeGrid();

    this.changeStartFinish();
    this.changeDistinction();
  };

  public makeGrid = () => {
    this.Grid = new Grid(this.size);
  };

  public clearGrid = () => {
    this.Grid = new Grid(this.gridSize);
  };

  public findPath = () => {
    const searchEngine = new SearchEngine(this.Grid, this.start, this.finish);
    searchEngine.findShortestPath();

    this.Grid.fillWaveDistanceGrid(searchEngine.grid);
    this.Grid.fillPathGrid(searchEngine.path);
  };

  private changeStartFinish = () => {
    this.start = { x: 0, y: 0 };
    this.finish = { x: this.size - 1, y: this.size - 1 };
  };

  private setStart = (y: number, x: number) => {
    this.start = { x, y };
  };

  private setFinish = (y: number, x: number) => {
    this.finish = { x, y };
  };

  private changeDistinction = () => {
    this.Grid.selectCellType(this.start.y, this.start.x, CELL_TYPES.DESTINATION);
    this.Grid.selectCellType(this.finish.y, this.finish.x, CELL_TYPES.DESTINATION);
  };
}
