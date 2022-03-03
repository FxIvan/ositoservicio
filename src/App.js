import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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
        </Routes>
      </BrowserRouter>
    )
}

export default App;
