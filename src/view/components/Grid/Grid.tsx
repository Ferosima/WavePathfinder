import React, { useContext } from "react";
import { CellComponent } from "../Cell/Cell";
import "./styles.scss";
import { Grid } from "../../../classes/Grid/Grid";
import { Context } from "../../App";
import { observer } from "mobx-react";

export const GridComponent = observer(() => {
  const grid = useContext(Context)?.grid;

  if (!grid) return null;

  return (
    <div className="grid">
      {grid.map((row) => (
        <div>
          {row.map((cell) => (
            <CellComponent item={cell} />
          ))}
        </div>
      ))}
    </div>
  );
});
