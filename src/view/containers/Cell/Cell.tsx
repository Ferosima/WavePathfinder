import React from 'react';
import './styles.scss';
import { Cell } from '../../../classes/Cell/Cell';
import { observer } from 'mobx-react';
import { CELL_TYPES } from '../../../classes/Cell/types';
import { useCell } from './hooks/useCell';

type TCell = {
  item: Cell;
};

const preset = {
  [CELL_TYPES.CELL]: '',
  [CELL_TYPES.WALL]: 'wall',
  [CELL_TYPES.DESTINATION]: 'destination',
};

export const CellComponent = observer(({ item }: TCell) => {
  const onPress = useCell(item);

  return <div className={`cell ${preset[item.type]}`} onClick={onPress} />;
});
