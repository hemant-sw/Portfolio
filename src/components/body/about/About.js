import React from 'react';
import SocialContact from '../../common/social-contact/SocialContact';

import './about.css';

export default function About() {
  return (
    <div className='about'>
        <div className='about-top'>
        <div className='about-info'>
            Hello There 👋, I am 
            <br/> <span className='info-name'>Hemant Sharma</span>.
            <br/> I love experimenting with 
            <br/> The web & app.

        </div>
        <div className='about-photo'>
            <img src={require("../../../assets/hemant.jpeg")} alt='frfr'
             className="picture"/>

        </div>
        </div>
        <SocialContact/>

    </div>
  )
}
