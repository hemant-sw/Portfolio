import React from "react";
import './home.css';
import Header from "../header/Header";
import Body from "../body/Body";
import Footer from "../footer/Footer";
export default function Home () {
    return (
        <div className="home">
            
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}