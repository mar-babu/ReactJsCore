import React from 'react';

import logo from './lr.jpg'; // Tell webpack this JS file uses this image
console.log(logo);
const NavLogo = (props) => (

        <li><a id="#navbar-brand">
            <div className ='navlogo'>
            <img src={logo} width="110" height="20" id="#d-inline-block align-top" alt="Logo" />
            </div>
            Laravel - React</a>

        </li>


);
export default NavLogo;