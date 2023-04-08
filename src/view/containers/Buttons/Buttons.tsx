import React, { useContext } from 'react';
import Button from '../../components/Button';
import { Context } from '../../App';

const Buttons = () => {
  const Controller = useContext(Context);

  return (
    <div>
      <Button label="Find Way" onClick={() => {}} />
      <Button
        label="Clear"
        onClick={() => {
          Controller?.makeGrid(Controller.gridSize);
        }}
      />
    </div>
  );
};

export default Buttons;
