import React from "react";
import NavigationBar from "../components/NavigationBar";
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="home-container">
            <NavigationBar />
            <div className="home-content">
                <div className="home-header">
                    <h1>Fyxe</h1>
                </div>
                <div className="home-paragraph">
                    <p>A User-Centric Approach to Privacy-Conscious AI Communication </p>
                </div>
            </div>
        </div>
    );
};