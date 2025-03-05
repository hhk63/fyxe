import React from "react";
import NavigationBar from "../components/NavigationBar";
import './GPTWall.css';

export default function GPTWall() {
    return (
        <div className="box">
            <NavigationBar />
            <div className="text">
                <div className="header">
                    <h1>GPTWall</h1>
                </div>
                <div className="paragraph">
                    <p>ADD INFO HERE</p>
                </div>
            </div>
        </div>
    );
};