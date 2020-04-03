import React from 'react'
import './navbar.style.css';

import NavLogo from "./logo";
import NavSearchBox from './nav-search-box'

class Navbar extends React.Component{

    render(){

        return (
            <div>
                <ul id="nav">
                    <NavLogo/>
                    <NavSearchBox/>
                </ul>

            </div>
        );
    }
}

export default Navbar;