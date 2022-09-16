import React from 'react';
import { SocialData } from '../../data/Socials';
import './socialcontact.css';

export default function SocialContact() {
  const data = SocialData;
  return (
  <div className="social-contact">
  {data.map((item)=>{
    return(
      <a href={item.links}>
        <div className="social-icon-div">
          <img src={item.icon} className="social-icon"/>
        </div>


      </a>
    );
  })}
  </div>
  );
}

