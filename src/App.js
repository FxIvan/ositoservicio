import React from 'react'
import { Route , Switch } from 'react-router-dom'
import { Principal } from './component/principal/principal';

function App() {
    return(
        <Switch>
          <Route path='/' component={Principal} exact/>
        </Switch>
    )
}

export default App;
