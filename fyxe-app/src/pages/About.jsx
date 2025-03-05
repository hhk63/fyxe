import React from "react";
import NavigationBar from "../components/NavigationBar";
import './About.css';

export default function About() {
    return (
        <div className="box">
            <NavigationBar />
            <div className="text">
                <div className="header">
                    <h1>About</h1>
                </div>
                <div className="paragraph">
                    <p>ADD INFO HERE</p>
                </div>
            </div>
        </div>
    );
};