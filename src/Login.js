import React from 'react';
import './login.css';

export default class Login extends React.Component{
    render(){
        return(
           <div className='log'>
                <form className='forms'>
                <h3> Login Form</h3>
                    <br/>
                <label> UserName: </label>
                <input type="text" placeholder="Username" className='name' required></input>
                <br/><br/>
                <label> Password: </label>
                <input type="password" placeholder="Password" className='name' required></input>
                <br/><br/>
                <button type="submit">Login</button>
                </form>
           </div>
        );
    }
}