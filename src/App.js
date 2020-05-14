import React,{Component} from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './Login';
import Order from './Order';
import Register from './Register';
import Cart from './Cart';
import Parts from './Parts';
import Header from './Header';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = 
     {"isLogged" : false};
    this.setLoginStatus = this.setLoginStatus.bind(this);
    this.setRegisterStatus = this.setRegisterStatus.bind(this);
  }

  render(){
    
    if(this.state.isLogged){
        return (
          <div>
            <Header/>
          <div>
            <BrowserRouter>
              <Switch>
                  <Route path="/parts" component={Parts}/>
              </Switch>
            </BrowserRouter>
        </div>
        </div>
        );
    }else{
      return (
        <div>
          <Header/>
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' 
                      render={props => <Login {...props} loginstate={this.setLoginStatus}/>}
                />
            <Route path='/Register' 
                   render={props => <Register {...props} registerState={this.setRegisterStatus} />}/>
                  <Route path="/parts" component={Parts}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/order" component={Order}/>
            </Switch>
          </BrowserRouter>
     </div>
     </div>
      );
    }
   
  }

  setRegisterStatus() {
    this.setState(     
        {"isLogged" : true}
    );
  }
  
  setLoginStatus(isLogged) {
    console.log("isLogged : " + isLogged);
    if(isLogged === undefined) return;
    this.setState(
        {"isLogged" : isLogged}
    );
  }
  
}