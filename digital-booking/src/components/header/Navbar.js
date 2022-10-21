import React from 'react'
import {NavbarWrapper} from './../../styles/NavbarWrapper'
import facebook from './../../images/icon-fb.png';
import linkedIn from './../../images/icon-in.png';
import tweeter from './../../images/icon-tw.png';
import instagram from './../../images/icon-ig.png';


const Navbar = ({open}) => {
  return (
    <NavbarWrapper open={open}>
        <h2>MENU</h2>
        <a href="#">Crear cuenta</a>
        <a href="#">Inciar sesión</a>
        <div>
            <img src={facebook} alt='Facebook'/>
            <img src={linkedIn} alt='LinkedIn'/>
            <img src={tweeter} alt='Tweeter'/>
            <img src={instagram} alt='Instagram'/>
        </div>
    </NavbarWrapper>
  )
}

export default Navbar