import React, { useContext } from "react";
import { CellComponent } from "../../components/Cell/Cell";
import "./styles.scss";
import { Context } from "../../App";
import { observer } from "mobx-react";

export const GridComponent = observer(() => {
  const grid = useContext(Context)?.grid;

  if (!grid) return null;

  return (
    <div className="grid">
      {grid.map((row, y) => (
        <div key={y}>
          {row.map((cell, x) => (
            <CellComponent key={`${y}_${x}`} item={cell} />
          ))}
        </div>
      ))}
    </div>
  );
});
