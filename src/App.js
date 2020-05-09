import React,{Component} from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './Login';
import Order from './Order';
import Register from './Register';

export default class App extends Component{

  render(){
      return (
        <div>
            <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/Order/:username" component={Order}/>
              <Route path="/logout" component={Login}/>
              <Route path="/register" component={Register}/>

            </Switch>
            </BrowserRouter>
       </div>
     );
  }
}