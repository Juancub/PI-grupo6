import React from 'react'
import facebook from './../../images/icon facebook.png';
import linkedIn from './../../images/icon linkedin.png';
import tweeter from './../../images/icon tweet.png';
import instagram from './../../images/icon ig.png';
import { FooterWrapper } from '../../styles/FooterWrapper';

const Footer = () => {
  return (
    <FooterWrapper>
        <p>©2021 Digital Booking</p>
        <div>
            <img src={facebook} alt='Facebook'/>
            <img src={linkedIn} alt='LinkedIn'/>
            <img src={tweeter} alt='Tweeter'/>
            <img src={instagram} alt='Instagram'/>
        </div>
    </FooterWrapper>
  )
}

export default Footer