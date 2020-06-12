import React,{Component} from 'react';
import axios from 'axios';
import { getUser } from '../UserFunctions';
import ModalLoginPayment from './ModalLoginPayment';
import Modal from "./ModalPayment";
class Products extends Component {
    constructor(){
        super();
        this.state={
        /*   quantity:'',
            id:'',*/
            products:[],
            modalOne:'',
            modalTwo:'',
            /*username:'',
            password:''*/
        }
    
        // this.quantity=this.quantity.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        // axios.post('/add',{
        //     quantity:this.state.quantity,
        //     id:this.state.id
        // })
        // .then(res=>{
        //     console.log(res.data);
        // });

    }
    componentDidMount(){
        axios.get('/products')
        .then(response=>{
            this.setState({products:response.data})
        });
        getUser().then(response=>{
            if(response){
                
            }
            else{
                
                this.setState({modalOne:"modal-1",
                    modalTwo:"modal-2"})
            }
        });
    }
    /*quantity(event){
        console.log(event.target.id);
        this.setState({quantity:1,id:event.target.id});
    }*/
    render(){
        /*<input id={data.id} type="number" min="1" max="10" onChange={this.quantity}/>--> onClick={this.quantity}*/
        return (
            <div className="container">
                <div className="row justify-content-center">    
                    <div className="card-group col-8">       
                        <form onSubmit={this.handleSubmit} className="row justify-content-center">            
                            {this.state.products.map(data=>
                                <div key={data.id} className="card-parent col-3 p-2 col-md-3">
                                    <div className="card-center text-center bg-black"> 
                                        <h4 className="text-title font-monospace position-relative text-white">{data.title}</h4>    
                                   </div>
                                    <div className="card">
                                        <img className="card-img-top" src={data.image} alt="Product"/>
                                        <div className="card-body h-200 box text-center bg-light d-inline-block pb-0">
                                            <h4 className="position-relative text-title">{data.price}€</h4>
                                        </div>
                                        <div className="card-footer p-0 text-white bg-dark">
                                        <button id={this.state.id} className="btn-block text-white bg-black btn-lg p-1" data-toggle="modal" data-target="#modal-1">BUY</button>    
                                        </div>
                                    </div>
                                </div>
                            )}
                        </form>
                        <ModalLoginPayment idModalOne={this.state.modalOne} idModalTwo={this.state.modalTwo}/>                
                    </div>        
                </div>
            </div>            
        );
    }
}

export default Products;