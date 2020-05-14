import React from 'react';
import './login.css';

export default class Login extends React.Component{
 
    constructor(props){
        super(props);
        this.state = {
            "isLogged" : true,
            "error" : ""};
    }

    handleClick(event){
        if(this.state.username === "sowmiya" && this.state.password === "123"){
            console.log("loggedIn");
            this.props.loginstate(this.state.isLogged);
            this.props.history.push('/parts');
        }else{
            this.setState({error:'Not a valid user'});
        }
        
    }

    handleRegister(event){
        this.props.history.push("/register");
    }

    render(){
        let format = {
            color:"red",
            textAlign: "center"
        };
        return(
           <div className='log'>
                <form className='forms'>
                <input type="text" placeholder="Username" className='name1' required
                onChange={(event) =>
                    this.setState(
                        {username: event.target.value}
                    )
                }></input>
                <input type="password" placeholder="Password" className='name2' required
                onChange={(event) =>
                    this.setState(
                        {password:event.target.value}
                    )
                }></input>
                <span style={format} >{this.state.error !== ''? this.state.error :''}</span>
                <button type="submit" onClick={(event) =>
                        this.handleClick(event)
                }>Login</button>

                <button type="register" onClick={this.handleRegister.bind(this)}>Register</button>
                </form>
           </div>
        );
    }
}