import React,{Component} from 'react';
import { login } from '../UserFunctions';
import Modal from "./ModalPayment";
class ModalLoginPayment extends Component{
    constructor(props){
        super(props);
        this.state={        
            username:'',
            password:'',
            show:false,
            isLoggedIn: false
        }
        
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.onChange=this.onChange.bind(this);        
        this.onSubmit=this.onSubmit.bind(this);
    }

  
    onChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit(event){
        event.preventDefault();
        const user={
            username:this.state.username,
            password:this.state.password
        }
       
        login(user).then(response=>{
            if(response){
                this.setState({
                    show: !this.state.show,
                })
                this.handleLoginClick()    
                console.log(response)
            }
        });
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
     
    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button=<button type="submit" className="btn-block btn-lg bg-black text-white" 
            data-toggle="modal" data-target="#modal-2"  data-dismiss="modal" onClick={e => {this.onSubmit(e);}}
             >CONFIRM</button>;
        }else{
            button=<button type="submit" className="btn-block btn-lg bg-black text-white" 
            data-toggle="modal" data-target="#modal-3"  data-dismiss="modal" onClick={e => {this.onSubmit(e);}}
             >CONFIRM</button>;
        }
        
        return (        
            <>
                <div id={this.props.idModalOne} className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-0 mt-1 ml-3 mr-3">
                                <h5 className="modal-title" id="exampleModalLongTitle">Do you wanna buy it?</h5>
                            </div>
                            <div className="modla-body pb-1 ">
                                <div className="col-lg-12 align-self-center">
                                    <input type="text" className="form-control mb-2" id="username" name="username"
                                    value={this.state.username} onChange={this.onChange}
                                    placeholder="Username" /> 
                                    <input type="text" className="form-control" id="password" name="password"
                                    value={this.state.password} onChange={this.onChange}
                                    placeholder="Password" />
                                </div>
                            </div>
                            <div className="modal-body d-flex flex-wrap p-0 mt-1">
                                <div className="col-lg-6 p-0">
                                    <button type="button" className="btn-block btn-lg bg-gray600 text-white" data-dismiss="modal">CANCEL</button>
                                </div>
                                <div className="col-lg-6 p-0">
                                    {button}
                                </div>
                            </div>                            
                        </div>                    
                    </div>                             
                 </div>           
          
                <Modal 
               id={this.props.idModalTwo}
                    onClose={this.onSubmit} show={this.state.show}>
                </Modal>
            </>
            
        );
    }
}
export default ModalLoginPayment;