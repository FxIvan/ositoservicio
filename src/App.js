import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Add } from './component/costos/add';
import { Formpanel } from './component/formpanel/formpanel';
import { Formuser } from './component/formuser/Formuser';
import { Navbar } from './component/navbar/navbar';
import { Principal } from './component/principal/principal';
import { HashRouter } from 'react-router-dom';

function App() {
    return(
      <HashRouter>
      <Navbar/>
        <Routes>
          <Route  path='/' element={<Principal />}/>
          <Route path='/ositoservicio' element={<Principal />}/> 
          <Route path='/panelcontrol/addPrecio' element={<Add/>} />
          <Route path='/panelcontrol/formpanel' element={<Formpanel/>} />
          <Route path='/panelcontrol/formpanel/:id' element={<Formuser/>}/>
        </Routes>   
        </HashRouter>
    )
}

export default App;
