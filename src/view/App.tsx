import React, { useRef, Provider } from "react";
import "./App.css";
import { GridComponent } from "./components/Grid/Grid";
import { Controller } from "../classes/Controller/Controller";
import { GridSizeComponent } from "./components/GridSize/GridSize";

export const Context = React.createContext<Controller | undefined>(undefined);

function App() {
  const controller = useRef(new Controller()).current;

  return (
    <div className="App">
      <Context.Provider value={controller}>
        <GridSizeComponent />
        <GridComponent />
      </Context.Provider>
    </div>
  );
}

export default App;
