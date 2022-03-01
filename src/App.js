import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './component/navbar/navbar';
import { Principal } from './component/principal/principal';

function App() {
    return(
      <BrowserRouter basename='/'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Principal />}/> 
        </Routes>
      </BrowserRouter>
    )
}

export default App;
