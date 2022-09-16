import React from "react";
import './web.css';

export default function Web () {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#project">
                <i class="fi fi-rr-edit-alt option-icon"></i>Project
                </a>
            </div>
            <div className="web-option">
                <a href="#skills" >
                <i class="fi fi-rs-computer option-icon"></i>Skills

                </a>
            </div>
            <div className="web-option">
                <a href="#works">
                <i class="fi fi-rs-briefcase option-icon"></i>Works

                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i class="fi fi-rr-call-outgoing option-icon"></i>Contact

                </a>
            </div>
            
        </div>
    )
}