import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { Principal } from './component/principal/principal';

function App() {
    return(
      <h1>Esta es la Appjs</h1>
      /*
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal/>} />
        </Routes>
      </BrowserRouter>
      */
    )
}

export default App;
