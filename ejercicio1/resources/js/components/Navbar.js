import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-black mb-4">
                <a className="navbar-brand" href="#"><img src="/assets/images/img_logo_slashmobility_white.png" alt="logo SlashMobility"/></a>
            </nav>
        )
    }
}
export default Navbar;