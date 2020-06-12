import React,{Component} from 'react';

import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Products from './Products';
import Footer from './Footer';

export default class Store extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Products/>
                <Footer/>
            </div>
        )
    }
}

if(document.getElementById('store')){
    ReactDOM.render(<Store />, document.getElementById('store'));
}
