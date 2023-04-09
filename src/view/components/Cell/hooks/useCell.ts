import { Context } from "../../../App";
import { Cell } from "../../../../domain/Cell/Cell";
import { useContext, useCallback } from "react";
import { CELL_TYPES } from "../../../../types";

const preset = {
  [CELL_TYPES.CELL]: "",
  [CELL_TYPES.WALL]: "wall",
  [CELL_TYPES.DESTINATION]: "destination",
  [CELL_TYPES.WAY]: "way",
};

export const useCell = (cell: Cell): [number | null | undefined, string, () => void] => {
  const Controller = useContext(Context);

  const distance = cell.distance && cell.distance > 0 ? cell.distance : null;

  const onPress = useCallback(() => {
    Controller?.selectCell(cell.x, cell.y);
  }, []);

  return [distance, preset[cell.type], onPress];
};
