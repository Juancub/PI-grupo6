import React, {useState} from 'react'
import {HeaderWrapper} from './../../styles/HeaderWrapper'
import Navbar from './Navbar'
import MenuButton from './MenuButton'
import logo from './../../images/logoDB.png';

const Header = () => {
    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
    setOpen(!open);
    };

  return (
    <HeaderWrapper>
      <img src={logo} alt='logo Digital Booking'/>
      <p>Sentite como en tu hogar</p>
      <Navbar open={open}/>
      <MenuButton open={open} handleClick={handleClick}/>
    </HeaderWrapper>
  )
}

export default Header