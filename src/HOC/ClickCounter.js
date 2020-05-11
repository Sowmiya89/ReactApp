import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';
 class ClickCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    ClickHandler = () => {
        this.setState({counter:5} );
    }

    render() {
        const {name,count,incrementCount}=this.props;
        return (
            <div>
                <p>{name} from clickCounter </p>
                <button onClick={incrementCount}>Button Clicked {count} times</button>
                <hr/>
            </div>
        );
    }
 }
 export default UpdatedComponent(ClickCounter);
