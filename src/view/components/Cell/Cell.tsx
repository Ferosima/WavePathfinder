import React from "react";
import "./styles.scss";
import { Cell } from "../../../domain/Cell/Cell";
import { observer } from "mobx-react";
import { useCell } from "./hooks/useCell";

type TCell = {
  item: Cell;
};

export const CellComponent = observer(({ item }: TCell) => {
  const [distance, preset, onPress] = useCell(item);

  return (
    <div className="cell-wrapper">
      <div className={`cell ${preset}`} onClick={onPress}>
        {distance}
      </div>
    </div>
  );
});
