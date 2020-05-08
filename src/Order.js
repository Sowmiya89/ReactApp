import React,{Component} from 'react';

export default class Order extends Component{

    logout(){
        this.props.history.push('/logout');
    }

    render(){
        const {username} = this.props.match.params;
        return(
            <div>
                <h3>Welcome {username}</h3>
                <button onClick={this.logout.bind(this)}>Logout</button>
            </div>
        );
    }
}
