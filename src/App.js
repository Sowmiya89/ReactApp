import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './Login';
import Order from './Order';

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Order/:username" component={Order}/>
        <Route path="/logout" component={Login}/>

      </Switch>
      </BrowserRouter>
  );
}

export default App;
