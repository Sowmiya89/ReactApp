import React, { Component } from 'react';
import ButtonReact from 'react-bootstrap/Button';
import SimpleReactValidator from 'simple-react-validator';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {"hasError" : false,
            "errorMessage": "",
            "email" : "",
            "firstname" : "",
            "lastname" : "",
            "username" : "",
            "password" : ""};
    this.validator = new SimpleReactValidator();
    }
    
    render() {

          if (this.state.hasError) {
              // Simulate a JS error
              throw new Error('I crashed!');
            }
        return(
            <div className="form-group">
                <p id="error" style={{ color: 'red' }}>{this.state.errorMessage}</p>

                <p style={{ color: 'red' }}>{this.validator.message('firstname', this.state.firstname, 'required')}</p> 
                <p>First Name : <input type="text" value={this.state.firstname} onChange={this.setEmail("firstname")}></input>   </p>

                <p style={{ color: 'red' }}>{this.validator.message('lastname', this.state.lastname, 'required')}</p> 
                <p>Last Name : <input type="text" value={this.state.lastname} onChange={this.setEmail("lastname")}></input>   </p>

                <p style={{ color: 'red' }}>{this.validator.message('email', this.state.email, 'required|email')}</p> 
                <p>Email : <input type="text" value={this.state.email} onChange={this.setEmail("email")}></input>   </p>

                <p style={{ color: 'red' }}>{this.validator.message('username', this.state.username, 'required')}</p> 
                <p>User Name : <input type="text" value={this.state.username} onChange={this.setEmail("username")}></input>   </p>

                <p style={{ color: 'red' }}>{this.validator.message('password', this.state.email, 'required')}</p> 
                <p>Password : <input type="text" value={this.state.password} onChange={this.setEmail("password")}></input>   </p>

                <ButtonReact variant="primary" onClick={this.setRegisterStatus.bind(this)}>Register</ButtonReact>
                               
            </div>
        );        
    }

    setEmail = (key) => (e) => {
        e.preventDefault();
        console.log("name " + key);
        let stateCopy = Object.assign({}, this.state);
        console.log(stateCopy);
        stateCopy[key] = e.target.value;
        this.setState(stateCopy);
        console.log(stateCopy);
    }
  
    setRegisterStatus() {

        if (this.validator.allValid()) {
            this.props.registerState();
            this.props.history.push('/parts');
          } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
          }
          return;
    }
}