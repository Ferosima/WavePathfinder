import { makeAutoObservable } from 'mobx';
import { Grid } from '../Grid/Grid';
import { SearchEngine } from '../SearchEngine/SearchEngine';
import { CELL_TYPES } from '../../types';

type Coord = { x: number; y: number };

export class Controller {
  public type: CELL_TYPES = CELL_TYPES.WALL;
  public size = 4;

  private Grid = new Grid(this.size);

  private start: Coord = { x: 0, y: 0 };
  private finish: Coord = { x: 2, y: 2 };

  public constructor() {
    makeAutoObservable(this);
    this.changeStartFinish();
  }

  public get grid() {
    return this.Grid.grid;
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
  };

  public makeGrid = () => {
    this.Grid = new Grid(this.size);
  };

  public clearGrid = () => {
    this.Grid = new Grid(this.size);
  };

  public findPath = () => {
    const searchEngine = new SearchEngine(this.Grid, this.start, this.finish);

    this.Grid.fillWaveDistanceGrid(searchEngine.grid);
    this.Grid.fillPathGrid(searchEngine.path);
  };

  private changeStartFinish = () => {
    this.start = { x: 0, y: 0 };
    this.finish = { x: this.size - 1, y: this.size - 1 };

    this.Grid.selectCellType(this.start.y, this.start.x, CELL_TYPES.DESTINATION);
    this.Grid.selectCellType(this.finish.y, this.finish.x, CELL_TYPES.DESTINATION);
  };
}
