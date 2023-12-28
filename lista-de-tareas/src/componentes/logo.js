import React from 'react';
import logo from '../logo.svg';
import '../App.css'
function Logo() {
    return (
        <img 
        src={logo} 
        className='img-logo' 
        alt = 'Logo' />
    );
}
export default Logo;