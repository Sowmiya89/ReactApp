import React,{Component} from 'react';
import './login.css';


export default class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password: '',
            password_confirmation : '',
            registratioErrors:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.value] : event.target.value
        });
    }

    handleSubmit(event){
        console.log("form submitted");
        event.preventDefault();
        var userDetail = {
            username : this.state.username,
            password: this.state.password
        }
        this.props.registerState(userDetail);
        this.props.history.push('/parts');
    }

    render(){
        return(
            <div>
                <h1 style={{textAlign:'center'}}>Registration</h1>
                <form className="register_form" onSubmit={this.handleSubmit}>
                    <input type="text" className="name1" placeholder="Username" 
                    onChange={this.handleChange} 
                    required />
                     <input type="password" className="name2" placeholder="Password" 
                    onChange={this.handleChange} 
                    required />
                     <input type="password_confirmation" className="name2" placeholder="Password_Confirmation" 
                    onChange={this.handleChange} 
                    required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}