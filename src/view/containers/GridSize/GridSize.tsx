import React from 'react';
import './styles.scss';
import { observer } from 'mobx-react';
import { Input } from '../../components/Input';
import Button from '../../components/Button';
import { useGridSize } from './hooks/useGridSize';

export const GridSizeComponent = observer(() => {
  const [size, error, onChange, onSubmit] = useGridSize();

  return (
    <div className="grid-size">
      <Input
        value={size}
        nativeType="number"
        placeholder="Size"
        error={error}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <Button label="Set Size" onClick={onSubmit} />
    </div>
  );
});
