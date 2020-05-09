import React,{Component} from 'react';
import axios from 'axios';
import Header from './Header';
import Card,{CardBody,CardTitle} from 'material-ui/Card';
import jsondata from './assets/autoparts.json';

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
        return <div style={ {marginTop : '20px'} }>
            <Card>
                <CardBody>
                    <p><img src={item.image} alt = {item.name}/></p>
                    <CardTitle title={item.name}>{item.name}</CardTitle>
                </CardBody>
            </Card>
        </div>
    }

    onhandleSearch(event){
        this.setState({search: event.target.value});
    }

    render(){

        let styles = {
            float : "right"
        }
        const {username} = this.props.match.params;
        const {search} = this.state;
        const filteredParts = jsondata.filter(item =>{
                return item.name.toLowerCase().indexof(search.toLowerCase()) === -1
        })
        return(
            <div>
                <Header />
                <button style={styles} onClick={this.logout.bind(this)}>Logout</button>
                <main style={ {marginTop:'4rem'} }>
                <h3>Welcome {username}</h3>
                <div className="container">
                    <div class="row">
                        <div className="col">
                            <input label = "Search Parts" icon="search" onChange={this.onhandleSearch}/>
                        </div>
                    </div>
                    <div className="row">
                        {
                            filteredParts.map(item => {
                                return this.renderParts(item);
                            })
                        }

                {
                   /* partsList.map((data,index)=>{
                        return <div key={index}>
                            <h1 key={index}> {data.name}</h1>
                            </div>
                    }) */
                }
                    </div>
                </div>
                </main>
            </div>
        );
    }
}
