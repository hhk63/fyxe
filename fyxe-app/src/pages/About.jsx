import React from "react";
import NavigationBar from "../components/NavigationBar";
import './About.css';

export default function About() {
    return (
        <div className="about-container">
            <NavigationBar />
            <div className="about-text">
                <div className="about-header">
                    <h1>About</h1>
                </div>
                <div className="about-paragraph">
                    <p>
                        We are four Computer Science students at Portland State University who care deeply about user privacy with AI chatbots.
                    </p>
                    <p>
                        As AI becomes more integrated into daily life, users, specifically those sharing sensitive
                        information, must understand the potential privacy risks involved in interacting with
                        mainstream AI bots. Our platform raises awareness about the collection and use of user data
                        by these AI-powered tools.
                    </p>
                    <p>
                        We aim to educate users about privacy issues and provide practical solutions. One key feature
                        is a tool that sanitizes user prompts, ensuring that personal data is protected before being
                        submitted to CAs. This tool acts as a safeguard, allowing users to interact with CAs while
                        maintaining their privacy.
                    </p>
                    <p>
                        By offering resources and insights, our website helps users make informed decisions,
                        enhances privacy literacy, and advocates for greater transparency in the practices of
                        conversational AI. Our goal is to empower users with the knowledge and tools needed
                        to protect their privacy in an increasingly AI-driven world.
                    </p>
                </div>
            </div>
        </div>
    );
};