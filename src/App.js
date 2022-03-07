import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Add } from './component/costos/add';
import { Navbar } from './component/navbar/navbar';
import { Principal } from './component/principal/principal';

function App() {
  /*
    "homepage": "https://fxivan.github.io/ositoservicio/",

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  
  */
    return(
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path='/' element={<Principal />}/>
          <Route path='/ositoservicio' element={<Principal />}/> 
          <Route path='/panelcontrol/addPrecio' element={<Add/>} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
