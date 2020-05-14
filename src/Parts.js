import React,{Component} from 'react';
import axios from 'axios';
import jsondata from './autoparts.json';

export default class Parts extends Component{

    constructor(props){
        super(props);
        this.state = {
            search:'',
            cartlist : [],
            list: jsondata
        };

    }
    
    logout(){
        this.props.history.push('/');
    }

    /*componentWillMount(){
           axios.get('http://localhost:3000/employees')
            .then((employees) => {
                console.log("Part Details",employees);
                this.setState(
                    {employees : employees.data}
                )
            }).catch((error) => {
                console.log("Error",error.data);
            }); 
    }*/

    onhandleSearch(event){
        this.setState({search: event.target.value});
    }

    onAddItem = item => {
            this.setState({
               cartlist: [...this.state.cartlist,item]
            })
        console.log("item",this.state.cartlist.length);
    }

    onHandleCart(){
        this.props.history.push({
            pathname : '/Cart',
            state:  {arraylist : this.state.cartlist}
        })
    }

    render(){
        const {list,search} = this.state;
        let styles = {
            float : "right"
        }
        let format ={
            marginTop: '20px',
            marginLeft : '30px'
        };
        const datalist = list
        .filter(item =>{
            return item.name.toLowerCase().indexOf(search.toLowerCase()) >=0
        })
        .map(item => {
            return (
                <div key={item.id}>
                    <button type="add" style={{float:'right',marginRight:'150px'}} onClick={()=>this.onAddItem(item)}><span>Add to Cart</span></button>
                    <p style={format} >{item.name}</p>
                    <p style={format} >{item.position_held}</p>  
                    <hr />
                </div>
            )
        })
        return(
            <div>
                <button style={styles} onClick={this.logout.bind(this)}>Logout</button>
                <main style={ {marginTop:'4rem'} }>
                <div className="container">
                    <input style={{width:'50%',marginLeft:'100px',padding:'5px'}} placeholder = "Search Parts" 
                    value={this.state.search}
                    onChange={this.onhandleSearch.bind(this)}/>
                    <div className="row" style={{marginTop : '30px'}}>
                        { datalist }                        
                    </div>
                </div>
                </main>
                <button type="cart" onClick={() => this.onHandleCart()}>View Cart</button>
            </div>
        );
    }
}

