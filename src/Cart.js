import React,{Component} from 'react';
import Header from './Header';

export default class Order extends Component{

    render(){
        let format ={
            marginTop: '20px',
            marginLeft : '30px'
        };
        const cartItemList  = this.props.location.state.arraylist;
        console.log("data",cartItemList);
        const datalist =  cartItemList.map(item => {
            return (
                <div key={item.id}>
                    <p style={format} >{item.name}</p>
                    <p style={format} >{item.position_held}</p>  
                    <hr />
                </div>
            )
        })
        return(
            <div>
                <h1>Cart Item Page</h1>
                <div className="row" style={{marginTop : '80px'}}>
                        {datalist}                       
                </div>
                <button type="order" onClick={()=> this.props.history.push('/order')}>Place Order</button>
            </div>
        );
    }
    
}
