import { Context } from "../../../App";
import { Cell } from "../../../../domain/Cell/Cell";
import { useContext, useCallback } from "react";

export const useCell = (cell: Cell) => {
  const Controller = useContext(Context);

  const onPress = useCallback(() => {
    Controller?.selectCell(cell.x, cell.y);
  }, []);

  return onPress;
};
