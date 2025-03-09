import React from "react";
import NavigationBar from "../components/NavigationBar";
import './Learn.css';

export default function Learn() {
    return (
        <div className="learn-container">
            <NavigationBar />
            <div className="learn-header">
                <h1>Learn</h1>
            </div>

            <div className="learn-content">
                {/* Introduction */}
                <div className="learn-section">
                    <h2 className="learn-subheader">WHY PRIVACY MATTERS</h2>
                    <p className="learn-paragraph">
                        AI chatbots are now deeply integrated into daily life, from education to hiring decisions.
                        However, with their widespread use, <strong>privacy risks</strong> are becoming a growing concern.
                    </p>
                </div>

                {/* Did You Know? */}
                <div className="learn-section">
                    <h2 className="learn-subheader">DID YOU KNOW?</h2>
                    <ul className="learn-list learn-paragraph">
                        <li>ChatGPT alone has <strong>400 million weekly users</strong> as of February 2025.</li>
                        <li>AI Chatbots process and store vast amounts of user data—sometimes without transparency.</li>
                        <li>Your personal conversations, health information, and location data could be <strong>shared with third parties</strong> or <strong>leaked in a data breach</strong>.</li>
                    </ul>
                </div>

                {/* Privacy Concerns */}
                <div className="learn-section">
                    <h2 className="learn-subheader">PRIVACY CONCERNS IN AI CHATBOTS</h2>

                    <h3 className="learn-subheader">Mass Data Collection</h3>
                    <ul className="learn-list learn-paragraph">
                        <li>Chatbots scrape <strong>billions</strong> of data points from the internet to train their models.</li>
                        <li>Every interaction could be <strong>stored, analyzed, or even leaked</strong>.</li>
                        <li>Many AI chatbot companies provide <strong>little transparency</strong> about how they process user data.</li>
                    </ul>

                    <h3 className="learn-subheader">User Behavior & Risk</h3>
                    <ul className="learn-list learn-paragraph">
                        <li>Studies show that users feel <strong>comfortable discussing sensitive topics</strong> with chatbots, such as health history or personal problems.</li>
                        <li>Users have <strong>mixed feelings</strong> about sharing personally identifiable information.</li>
                        <li>The <strong>perceived warmth and intelligence</strong> of a chatbot influence how much people disclose.</li>
                    </ul>
                </div>

                {/* Potential Privacy Violations */}
                <div className="learn-section">
                    <h2 className="learn-subheader">POTENTIAL PRIVACY VIOLATIONS</h2>
                    <ul className="learn-list learn-paragraph">
                        <li>In <strong>February 2025</strong>, a study analyzed the top 10 AI chatbots on the Apple Store, including Google Gemini, DeepSeek, and ChatGPT.</li>
                        <li>DeepSeek leaked <strong>1M+ records</strong> of chat history, API keys, and sensitive user data—leading to risks like identity theft and financial fraud.</li>
                        <li>British Airways faced a case where a chatbot security flaw led to a <strong>£183 million fine</strong> after unauthorized access to user data.</li>
                    </ul>
                </div>

                {/* What Users Can Do */}
                <div className="learn-section">
                    <h2 className="learn-subheader">What YOU Can Control: DO's and DONT's</h2>
                    <p className="learn-paragraph">
                        1. <strong>Be mindful of what you share!</strong> Avoid entering full names, addresses, phone numbers, or financial details.
                    </p>
                    <p className="learn-paragraph">
                        2. Use tools like our <strong>Prompt Sanitizer</strong> to remove sensitive details before submitting queries.
                    </p>
                    <p className="learn-paragraph">
                        3. Always check the <strong>privacy policies</strong> of chatbot platforms before engaging.
                    </p>
                </div>

                {/* How to Improve Privacy */}
                <div className="learn-section">
                    <h2 className="learn-subheader">HOW CAN WE IMPROVE AI PRIVACY?</h2>
                    <p className="learn-paragraph">
                        By developing <strong>better privacy tools</strong> and <strong>educating users</strong>, we can create safer AI interactions. 
                        Explore our <strong> Sanitizer</strong> tool to take control of your data.
                    </p>
                </div>
            </div>
        </div>
    );
};
