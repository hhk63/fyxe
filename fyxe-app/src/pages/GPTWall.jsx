import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import './GPTWall.css';
import { Button, TextField } from "@mui/material";
import { sanitize } from "../resources/Requests";

export default function GPTWall() {
    const [prompt, setPrompt] = useState('');
    const [sanitizedPrompt, setSanitizedPrompt] = useState('');
    const [hasError, setHasError] = useState(false);

    function handleSubmit() {
        sanitize(prompt).then((response) => {
            if (response !== '') {
                setSanitizedPrompt(response)
            } else {
                setHasError(true);
            }
        });
    }

    return (
        <div className="gpt-container">
            <NavigationBar />
            <div className="gpt-text">
                <div className="gpt-header">
                    <h1>Sanitizer</h1>
                </div>
                <div className="gpt-paragraph">
                    <p>{"Sanitized Prompt: " + sanitizedPrompt}</p>
                </div>
            </div>
            <div className="gpt-prompt-box" >
                <TextField className="gpt-prompt" variant="outlined" label="Prompt" color="black" onChange={(event) => setPrompt(event?.target.value)} value={prompt}/>
                <Button className="gpt-submit" variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
};