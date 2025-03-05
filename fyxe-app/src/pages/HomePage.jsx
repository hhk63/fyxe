import React from "react";
import NavigationBar from "../components/NavigationBar";
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="box">
            <NavigationBar />
            <div className="text">
                <div className="header">
                    <h1>Fyxe</h1>
                </div>
                <div className="paragraph">
                    <p>A User-Centric Approach to Secure Communication </p>
                </div>
            </div>
        </div>
    );
};