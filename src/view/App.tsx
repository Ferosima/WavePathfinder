import React, { useRef } from 'react';
import './App.scss';
import { GridComponent } from './containers/Grid/Grid';
import { GridSizeComponent } from './containers/GridSize/GridSize';
import { Controller } from '../classes/Controller/Controller';

export const Context = React.createContext<Controller | undefined>(undefined);

function App() {
  const controller = useRef(new Controller()).current;

  return (
    <div className="app">
      <Context.Provider value={controller}>
        <div className="app-container">
          <GridSizeComponent />
          <GridComponent />
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
