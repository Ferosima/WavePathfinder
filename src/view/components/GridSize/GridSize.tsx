import React, { useContext } from "react";
import { CellComponent } from "../Cell/Cell";
import "./styles.scss";
import { Grid } from "../../../classes/Grid/Grid";
import { Context } from "../../App";
import { observer } from "mobx-react";

export const GridSizeComponent = observer(() => {
  const Controller = useContext(Context);

  return <input value={Controller?.gridSize} />;
});
