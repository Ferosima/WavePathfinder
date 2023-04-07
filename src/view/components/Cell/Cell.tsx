import React from "react";
import "./styles.scss";
import { Cell } from "../../../classes/Cell/Cell";
import { observer } from "mobx-react";

type TCell = {
  item: Cell;
};

export const CellComponent = observer(({ item }: TCell) => {
  return (
    <div
      className={`cell ${item.x ? "filled" : ""}`}
      // onClick={item.selectTy}
    />
  );
});
