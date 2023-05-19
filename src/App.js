/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { routes } from "./Routes";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Login from "./Pages/AuthUser/Login"
import Register from "./Pages/AuthUser/Register"

const App = () => {
  return (
    <Fragment>

      <BrowserRouter basename={`/`}>
        <Routes>
          {
            routes.map(({ path, Component }) => (
              <Route key={path}
                exact
                path={`${process.env.PUBLIC_URL}${path}`} 
                element={<Component />}
                />
            ))
          }
          <Route exact path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
          <Route exact path={`${process.env.PUBLIC_URL}/register`} element={<Register />} />
        </Routes>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
