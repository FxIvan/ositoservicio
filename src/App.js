import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Add } from './component/costos/add';
import { Formpanel } from './component/formpanel/formpanel';
import { Navbar } from './component/navbar/navbar';
import { Principal } from './component/principal/principal';

function App() {
    return(
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path='/' element={<Principal />}/>
          <Route path='/ositoservicio' element={<Principal />}/> 
          <Route path='/panelcontrol/addPrecio' element={<Add/>} />
          <Route path='/panelcontrol/formpanel' element={<Formpanel/>} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
