import React,{Component} from 'react';
import axios from 'axios';
import Header from './Header';
import Card,{CardBody,CardTitle} from 'material-ui/Card';
import jsondata from './autoparts.json';

export default class Order extends Component{

    constructor(){
        super();
        this.state = {
            employees:'',
            search:''
        };
    }
    
    logout(){
        this.props.history.push('/logout');
    }

    /*componentWillMount(){
           axios.get('http://localhost:3000/employees')
            .then((employees) => {
                console.log("Order Details",employees);
                this.setState(
                    {employees : employees.data}
                )
            }).catch((error) => {
                console.log("Error",error.data);
            }); 
    }*/

    renderParts = item =>{
        const {search} = this.state;
        return <div style={ {marginTop : '20px'},{marginLeft : '20px'} }>
           <p>{item.name}</p>
            <p>{item.position_held}</p>
            <hr />
        </div>
    }

    onhandleSearch(event){
        const search = event.target.value;
        this.setState(jsondata => {
        const filteredParts = jsondata.filter(item =>{
            return item.name.toLowerCase().includes(search.toLowerCase());
        });
        return {search,filteredParts};
        });
    }

    render(){

        let styles = {
            float : "right"
        }
        const {username} = this.props.match.params;
        const {search} = this.state;
        const filteredParts = jsondata.filter(item =>{
            var val = item.name.toLowerCase().toString();
            if(val.indexOf(search.toLowerCase())){
                return item.name;
            }else{
                return -1;
            }
        })
        return(
            <div>
                <Header />
                <button style={styles} onClick={this.logout.bind(this)}>Logout</button>
                <main style={ {marginTop:'4rem'} }>
                <h3>Welcome {username}</h3>
                <div className="container">
                    <div className="col" style={{float:'center'}}>
                        <input placeholder = "Search Parts" onChange={this.onhandleSearch.bind(this)}/>
                    </div>
                    <div className="row">
                        {
                            filteredParts.map(item => {
                                return this.renderParts(item);
                            })
                        }
                    </div>
                </div>
                </main>
            </div>
        );
    }
}
