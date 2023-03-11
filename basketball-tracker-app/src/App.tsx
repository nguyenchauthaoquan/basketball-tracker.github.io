import React from 'react';
import './App.css';
import {RouteItem} from "./common/interfaces/RouteItem";
import {Route, Routes} from 'react-router-dom';
import routes from "./common/configurations/routes";

function App() {
  return (
    <div className="App">
        {
            routes.map((route: RouteItem) =>
                <Routes key={route.path}>
                  <Route index path={route.path} element={route.element} />
                </Routes>
            )
        }
    </div>
  );
}

export default App;
