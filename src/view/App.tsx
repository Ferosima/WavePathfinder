import React, { useRef } from 'react';
import './App.scss';
import { GridComponent } from './containers/Grid/Grid';
import { GridSizeComponent } from './containers/GridSize/GridSize';
import { Controller } from '../domain/Controller/Controller';
import Buttons from './containers/Buttons/Buttons';

export const Context = React.createContext<Controller | undefined>(undefined);

function App() {
  const controller = useRef(new Controller()).current;

  return (
    <div className="app">
      <Context.Provider value={controller}>
        <div className="app-container">
          <GridSizeComponent />
          <GridComponent />
          <Buttons />
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
