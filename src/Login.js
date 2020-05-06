import React from 'react';
import './login.css';

export default class Login extends React.Component{
    render(){
        return(
           <div className='log'>
                <form className='forms'>
                <input type="text" placeholder="Username" className='name1' required></input>
                <input type="password" placeholder="Password" className='name2' required></input>
                <button type="submit">Login</button>
                </form>
           </div>
        );
    }
}