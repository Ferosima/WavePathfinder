import React, { useContext } from 'react';
import './styles.scss';
import { Context } from '../../App';
import { observer } from 'mobx-react';
import './styles.scss';

export const GridSizeComponent = observer(() => {
  const Controller = useContext(Context);

  return (
    <div className="grid-size">
      <input defaultValue={Controller?.gridSize} type="number" />
      <button></button>
    </div>
  );
});
