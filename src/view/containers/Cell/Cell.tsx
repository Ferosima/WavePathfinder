import React from 'react';
import './styles.scss';
import { Cell } from '../../../domain/Cell/Cell';
import { observer } from 'mobx-react';
import { useCell } from './hooks/useCell';
import { CELL_TYPES } from '../../../types';

type TCell = {
  item: Cell;
};

const preset = {
  [CELL_TYPES.CELL]: '',
  [CELL_TYPES.WALL]: 'wall',
  [CELL_TYPES.DESTINATION]: 'destination',
  [CELL_TYPES.WAY]: 'way',
};

export const CellComponent = observer(({ item }: TCell) => {
  const onPress = useCell(item);

  return (
    <div className={`cell ${preset[item.type]}`} onClick={onPress}>
      {item.distance}
    </div>
  );
});
