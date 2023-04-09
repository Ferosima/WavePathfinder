import React, { useContext } from 'react';
import Button from '../../components/Button';
import { Context } from '../../App';
import './styles.scss';

const Buttons = () => {
  const Controller = useContext(Context);

  return (
    <div className="buttons">
      <Button label="Find Way" onClick={Controller?.findPath} />
      <Button
        label="Clear"
        onClick={() => {
          Controller?.makeGrid();
        }}
      />
    </div>
  );
};

export default Buttons;
