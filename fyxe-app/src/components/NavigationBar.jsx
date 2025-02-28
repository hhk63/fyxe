import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './NavigationBar.css';


export default function NavigationBar() {
    const navigate = useNavigate();

    return (
        <div className="navigate-bar">
            <Box className="box">
                <div className="home-button" onClick={() => navigate('./')}>
                    <button>Home</button>
                </div>   
                <div className="learn-button" onClick={() => navigate('./Learn')}>
                    <button>Learn</button>
                </div>
                <div className="GPT-Wall button" onClick={() => navigate('./GPTWall')} >
                    <button>GPTWall</button>
                </div>
                <div className="about-button" onClick={() => navigate('./About')}>
                    <button>About</button>
                </div>
            </Box>
        </div>
    );
};