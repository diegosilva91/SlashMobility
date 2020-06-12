import React from "react";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
    constructor(props){
        super(props);

    }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
 
 
render() {
    return (
        
        <div id={this.props.id} className="modal fade bd-example-modal-sm show"  tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-0 mt-1 ml-3 mr-3">
                                <h5 className="modal-title" id="exampleModalLongTitle">Payment</h5>
                            </div>
                            <div className="modal-body pb-1 ">
                                <div className="col-lg-12 align-self-center">
                                    <input type="number" className="form-control mb-2" id="cardnumber" name="cardnumber"
                                    placeholder="Card Number" /> 
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <input type="number" className="form-control" id="caduceDate" name="cadudeDate"
                                    placeholder="Date" />
                                </div>
                                <div className="col-lg-6 align-self-center">
                                <input type="number" className="form-control" id="cvc" name="cvc"
                                    placeholder="CVC" />
                                </div>
                            </div>
                            <div className="modal-body d-flex flex-wrap p-0 mt-1">
                                <div className="col-lg-6 p-0">
                                    <button type="button" className="btn-block btn-lg bg-gray600 text-white" data-dismiss="modal">CANCEL</button>
                                </div>
                                <div className="col-lg-6 p-0">
                                    <button type="submit" className="btn-block btn-lg bg-black text-white" data-dismiss="modal" 
                                    onClick={e => {this.onSubmit(e);}}
                                     >CONFIRM</button>
                                </div>
                            </div>                            
                        </div>                    
                    </div>                             
                 </div>           
      
    );
  }
}
