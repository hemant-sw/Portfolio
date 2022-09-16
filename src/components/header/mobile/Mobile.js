import React from "react";
import './mobile.css';


export default function Mobile({isOpen,setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-bs-cross-circle"></i>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#project">
                <i class="fi fi-rr-edit-alt option-icon"></i>Project
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills" >
                <i class="fi fi-rs-computer option-icon"></i>Skills

                </a>
            </div>
            <div className="mobile-option">
                <a href="#works">
                <i class="fi fi-rs-briefcase option-icon"></i>Works

                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                <i class="fi fi-rr-call-outgoing option-icon"></i>Contact

                </a>
            </div>
            </div>
           
        </div>
    )
}