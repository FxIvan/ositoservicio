import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Principal } from './component/principal/principal';

function App() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal />}/> 
        </Routes>
      </BrowserRouter>
    )
}

export default App;
