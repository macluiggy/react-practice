import React from "react";
// import logo from './logo.svg';
import "./App.css";
//components
import ReactRouter1 from "./components/react-router-1";
import ReactRouter2 from "./components/react-router-2";
import RWRRT from "./components/robin-wieruch-react-router-tutorial/index";
import PedroTechReactRouterV6 from "./components/pedro-tech-react-routerv6/index";
// import FCC_React_router_tutorial from './components/fcc-react-router-tutorial/index.js'
// import {BrowserRouter} from 'react-router-browser'

function App() {
  return (
    <div className="App">
      {/* <ReactRouter2 /> */}
      {/* <ReactRouter1 /> */}
      <PedroTechReactRouterV6 />
      {/* <FCC_React_router_tutorial /> */}
      {/* <RWRRT /> */}
    </div>
  );
}

export default App;
