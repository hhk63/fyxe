import React from "react";
import NavigationBar from "../components/NavigationBar";
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="home-container">
            <NavigationBar />
            <div className="home-content">
                <div className="logo">
                    <img className="logo" src={require('../resources/foxlogo.png')} />
                </div>
                <div className="home-header">
                    <h1>scrubFox</h1>
                </div>
                <div className="home-paragraph">
                    <p>A User-Centric Approach to Secure Communication </p>
                </div>
            </div>
        </div>
    );
};