import { Context } from '../../../App';
import { Cell } from '../../../../domain/Cell/Cell';
import { useContext, useCallback } from 'react';
import { CELL_TYPES } from '../../../../types';

const preset = {
  [CELL_TYPES.CELL]: '',
  [CELL_TYPES.WALL]: 'wall',
  [CELL_TYPES.DESTINATION]: 'destination',
  [CELL_TYPES.WAY]: 'way',
};

export const useCell = (cell: Cell): [string, () => void] => {
  const Controller = useContext(Context);

  const onPress = useCallback(() => {
    Controller?.selectCell(cell.x, cell.y);
  }, []);

  return [preset[cell.type], onPress];
};
