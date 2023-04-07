import React, { useRef, Provider } from "react";
import "./App.css";
import { GridComponent } from "./components/Grid/Grid";
import { Main } from "../classes/Main/Main";

export const Context = React.createContext<Main | undefined>(undefined);

function App() {
  const main = useRef(new Main()).current;

  return (
    <div className="App">
      <Context.Provider value={main}>
        <GridComponent />
      </Context.Provider>
    </div>
  );
}

export default App;
