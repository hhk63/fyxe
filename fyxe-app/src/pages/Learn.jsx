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
                    <p> AI chatbot are now deeply integrated into daily life, from education to hiring 
                        decisions. This unprecedented growth may have unintended consequences for consumer
                        privacy. With this widespread use, privacy risks are becoming a growing concern.
                    </p>
                    <h2>Did You Know?</h2>
                    <p>
                        1. ChatGPT alone has 400 million weekly users as of February 2025.
                    </p>
                    <p>
                        2. AI Chatbots process and stroe vast amounts of user data-sometimes
                        without clear transparency.
                    </p>
                    <p>
                        3. Your personal conversations, health information, and location data 
                           could be shared with third parties or leaked in a data breach.
                    </p>
                    <h2>Privacy Concerns in AI Chatbots</h2>
                    <h3>Mass Data Collection</h3>
                    <p>
                        1. Chatbots scrape billions of data points from across the internet
                           to train their models.                        
                    </p>
                    <p>
                        2. Every interaction could be stored, analyzed, or even leaked.
                    </p>
                    <p>
                        3. Many AI chatbot companies offer little to no information on how they process
                           users' personal data, leaving you in the dark about what happens to your information.
                    </p>
                    <h3>User Behavior & Risk</h3>
                    <p>
                        1. Studies show that users feel comfortable discussing sensitive topics with chatbots.
                           For example, their health history or personal problems with chatbots. 
                    </p>
                    <p>
                        2. Users have mixed feelings about sharing personally identifiable information.
                    </p>
                    <p>
                        3. The perceived warmth and intelligence of a chatbot also influences how much people
                           disclose.
                    </p>
                    <h3>Potential Privacy Violations</h3>
                    <p>
                        1. In February 2025, a study analyzed the top 10 AI chatbots on the Apple Store,
                           including Google Gemini, DeepSeek, and ChatGPT. 
                    </p>
                    <p>
                        2. DeepSeek leaked 1M+ records of chat history, API keys, and sensitive user data.
                           It leaked personal data that could lead to identity theft and financial fraud.
                    </p>
                    <p>
                        3. British Airways had a case where a chatbot sercurity flaw lef to a £183 million
                           fine after unauthorized access to user data.
                    </p>
                    <h2>What YOU Can Control</h2>
                    <p>
                        Be mindful of what you share! Avoid entering full names, addresses, phone numbers,
                        or financial details.
                    </p>
                    <p>
                        Use tools like our Prompt Sanitizer to remove sensitive details before submitting queries.
                    </p>
                    <p>
                        Check privacy policies of chatbot platforms before engaging.
                    </p>
                    <h2>How Can We Improve AI Privacy?</h2>
                    <p>
                        By developing better privacy tools and educating users, we can create safer AI interactions. 
                        Explore our Prompt Sanitizer tool to take control of your data.
                    </p>
                </div>
            </div>
        </div>
    );
};