import React,{Component} from 'react' ;
import PropTypes from 'prop-types';
import './login.css';

export default class Employee extends Component{
    constructor(){
        super();
        this.state ={
            employeeList:[
                {id: 10,name:'A',designation:'developer'},
                {id:11,name:'B',designation:'tester'}
            ]
        }
    }
    render(){
        return(
            <div className='employee'>
                <h1> Welcome to React App</h1>
                <h3> Employee Details</h3>
                <table border='1' className='details'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                    {
                        this.state.employeeList.map(item =>(
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.designation}</td>
                        </tr>
                        ))}
                </table>
            </div>
        );
    }
}
Employee.defaultProps = {
    id:'1'
}
Employee.propTypes={
    id:PropTypes.number
}
