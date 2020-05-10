import React,{Component} from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './Login';
import Order from './Order';
import Register from './Register';
import Cart from './Cart';
import Parts from './Parts';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {"isLogged" : false};
    //this.setLoginStatus = this.setLoginStatus.bind(this);
    //this.setRegisterStatus = this.setRegisterStatus.bind(this);
  }

  render(){
      return (
        <div>
            <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/parts" component={Parts}/>
              <Route path="/logout" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/order" component={Order}/>
            </Switch>
            </BrowserRouter>
       </div>
     );
  }

  /*setRegisterStatus(data) {
    this.setState(
      [
        {"isLogged" : true},
        {"userDetail" : data}
      ]
    );
  }
  
  setLoginStatus(isLogged, data) {
    console.log("isLogged : " + isLogged);
    console.log("data : " + data);
    if(isLogged == undefined) return;
    this.setState(
      [
        {"isLogged" : isLogged},
        {"userDetail" : data}
      ]
    );
  }*/
  
}