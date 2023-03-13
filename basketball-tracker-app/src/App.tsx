import React from 'react';
import './App.css';
import {RouteItem} from "./common/interfaces/RouteItem";
import {Route, Routes} from 'react-router-dom';
import routes from "./common/configurations/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {
          routes.map((route: RouteItem) =>
              <Route key={route.path} index={route.index} path={route.path} element={route.element} />
          )
        }
      </Routes>
    </div>
  );
}

export default App;
