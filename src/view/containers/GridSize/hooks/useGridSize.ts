import { useCallback, useContext, useState } from 'react';
import { Context } from '../../../App';

export const useGridSize = (): [number, string | undefined, (value: any) => void, () => void] => {
  const Controller = useContext(Context);
  const [size, setSize] = useState<number>(Controller?.gridSize || 0);
  const [error, setError] = useState<string>();

  const onChange = useCallback((value: string) => {
    setSize(Number(value));
    setError(undefined);
  }, []);

  const onSubmit = useCallback(() => {
    if (size > 10) {
      setError('Max size of grid 10');
      return;
    } else if (size < 4) {
      setError('Min size of grid 4');
      return;
    }
    Controller?.selectSize(size);
  }, [size]);

  return [size, error, onChange, onSubmit];
};
