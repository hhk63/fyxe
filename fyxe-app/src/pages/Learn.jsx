import React from "react";
import NavigationBar from "../components/NavigationBar";
import './Learn.css';

export default function Learn() {
    return (
        <div className="learn-container">
            <NavigationBar />
            <div className="learn-text">
                <div className="learn-header">
                    <h1>Learn</h1>
                </div>
                <div className="learn-paragraph">
                    <p>ADD INFO HERE</p>
                </div>
            </div>
        </div>
    );
};