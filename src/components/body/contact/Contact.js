import React from 'react';
import Separator from '../../common/separator/Separator';
import SocialContact from '../../common/social-contact/SocialContact';
import './contact.css';

export default function Contact() {
  return (
    <div className='contact'>
      <Separator/>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact/>
        </div>
        <div className='download'>
          <a download href={require("../../../assets/resume.pdf")}>
          <i class="fi fi-sr-cloud-download-alt download-icon"></i>
            Download Resume
          </a>

        </div>
      </div>
    </div>
  )
}
