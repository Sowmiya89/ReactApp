import React,{Component} from 'react';

export default class Header extends Component{

    render(){
        let format ={
            backgroundColor:"#054375",
            padding: 10,
            color:"white",
            textAlign:"center"
        }
        return(
            <div>
                <h1 style={format}> Autoparts Store </h1>
            </div>
        );
    }
}