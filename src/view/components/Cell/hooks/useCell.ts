import React, { useContext, useCallback } from "react";
import { Context } from "../../../App";
import { Cell } from "../../../../classes/Cell/Cell";

export const useCell = (cell: Cell) => {
  const Controller = useContext(Context);

  const onPress = useCallback(() => {
    Controller?.selectCell(cell.x, cell.y);
  }, []);

  return onPress;
};
