import React,{Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    constructor(){
        super();
        this.state={
            quantity:'',
            id:'',
            products:[]
        }
        this.quantity=this.quantity.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        axios.post('/add',{
            quantity:this.state.quantity,
            id:this.state.id
        })
        .then(res=>{
            console.log(res.data);
        });

    }
    componentDidMount(){
        axios.get('/products')
        .then(res=>{
            this.setState({products:res.data})
        });
    }
    quantity(event){
        console.log(event.target.id);
        this.setState({quantity:1,id:event.target.id});
    }
    render(){
        /*<input id={data.id} type="number" min="1" max="10" onChange={this.quantity}/>--> onClick={this.quantity}*/
        return (
            <div className="container">
                <div className="row justify-content-center">    
                    <div className="card-group col-lg-10">    


                        <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body d-flex flex-wrap p-0">
                                    <div className="col-lg-6 p-0">
                                        <button type="button" className="btn-block btn bg-gray600 text-white" data-dismiss="modal">CANCEL</button>
                                    </div>
                                    <div className="col-lg-6 p-0">
                                        <button type="button" className="btn-block btn bg-black text-white">CONFIRM</button>
                                    </div>                    
                                </div>                            
                            </div>
                        </div>
                             
                        <form onSubmit={this.handleSubmit} className="row justify-content-center">            
                            {this.state.products.map(data=>
                                <div key={data.id} className="card-parent col-lg-3 p-0 m-1">
                                    <div className="card-center text-center bg-black"> 
                                        <h4 className="text-title position-relative text-white">{data.title}</h4>    
                                   </div>
                                    <div className="card">
                                
                                        <img className="card-img-top" src={data.image} alt="Product"/>
                                    
                                        <div className="card-body h-200 box text-center bg-light d-inline-block">
                                            <h4 className="position-relative text-title">{data.price}€</h4>
                                        </div>
                                        <div className="card-footer p-0 text-white bg-dark">
                                            <button id={data.id} className="btn-block text-white bg-black btn-lg" data-toggle="modal" data-target=".bd-example-modal-sm">Buy</button>
                                            
                                           
                                        </div>
                                    </div>
                                </div>
                            )}
                             <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                             
                            </div>
                        </form>                    
                    </div>        
                </div>
            </div>            
        );
    }
}



if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById('example'));
}
