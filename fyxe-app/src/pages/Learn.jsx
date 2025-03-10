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
                    <li>
                        ChatGPT alone has 
                        <a href="https://explodingtopics.com/blog/chatgpt-users" 
                        className="learn-link" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <strong> 400 </strong>
                        </a> 
                        million weekly users as of February 2025.
                    </li>
                    <li>AI Chatbots process and store vast amounts of user data—sometimes without transparency.</li>
                    <li>Your personal conversations, health information, and location data could be <strong>shared with third parties</strong> or <strong>leaked in a data breach</strong>.</li>
                </ul>
            </div>


            {/* Privacy Concerns */}
            <div className="learn-section">
                <h2 className="learn-subheader">PRIVACY CONCERNS IN AI CHATBOTS</h2>

                <h3 className="learn-subheader">Mass Data Collection</h3>
                <ul className="learn-list learn-paragraph">
                    <li>
                        Chatbots scrape 
                        <a href="https://iapp.org/news/a/chatbots-ai-and-the-future-of-privacy" 
                        className="learn-link" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        billions
                        </a>of data points from the internet to train their models.
                    </li>
                    <li>Every interaction could be <strong>stored, analyzed, or even leaked</strong>.</li>
                    <li>
                        Many AI chatbot 
                        <a href="https://www.considerati.com/publications/openai-personaldata-chatgpt.html" 
                        className="learn-link" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            companies
                        </a>provide little transparency about how they process user data.
                    </li>
                </ul>

                <h3 className="learn-subheader">User Behavior & Risk</h3>
                <ul className="learn-list learn-paragraph">
                    <li>
                        Studies show that users feel 
                        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11824973/" 
                        className="learn-link" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            comfortable discussing sensitive topics
                        </a>, such as health history or personal problems.
                    </li>
                    <li>
                        Users have 
                        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11824973/" 
                        className="learn-link" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            mixed feelings
                        </a> 
                        about sharing personally identifiable information.
                    </li>
                    <li>
                        The perceived warmth and intelligence of a chatbot 
                        <a href="https://arxiv.org/html/2402.09716.pdf" 
                        className="learn-link" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            influence
                        </a> 
                        how much people disclose.
                    </li>
                </ul>
            </div>


            {/* Potential Privacy Violations */}
            <div className="learn-section">
                <h2 className="learn-subheader">POTENTIAL PRIVACY VIOLATIONS</h2>
                <ul className="learn-list learn-paragraph">
                    <li>
                        In <strong>Feb 2025</strong>, a 
                        <a href="https://surfshark.com/research/chart/ai-chatbots-privacy"
                        className="learn-link"
                        target="_blank"
                        rel="noopener noreferrer">
                            study
                        </a>analyzed the <strong>top 10 AI chatbots</strong> on the Apple Store, including Google Gemini, DeepSeek
                        and ChatGPT. Findings:
                        <ul>
                            <li><strong>30%</strong> of popular chatbots share data with <strong>third parties</strong>.</li>
                            <li><strong>40%</strong> collect <strong>users' location data</strong>.</li>
                            <li>All analyzed chatbots collect user data, averaging <strong>11 out of 35 possible data types</strong>.</li>
                            <li><strong>Google Gemini</strong> collects the most information, gathering <strong>22 out of 35 possible data types</strong>.</li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://www.forbes.com/sites/larsdaniel/2025/02/01/deepseek-data-leak-exposes--1000000-sensitive-records/"
                        className="learn-link"
                        target="_blank"
                        rel="noopener noreferrer">
                            DeepSeek
                        </a>leaked <strong>1M+ records</strong> of chat history, API keys, and sensitive user data—leading to risks like identity theft and financial fraud.
                    </li>
                    <li>
                        <a href="https://smythos.com/ai-agents/chatbots/chatbots-and-data-privacy/"
                        className="learn-link"
                        target="_blank"
                        rel="noopener noreferrer">
                            British
                        </a>Airways faced a case where a chatbot security flaw led to a <strong>£183 million fine</strong> after unauthorized access to user data.
                    </li>
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
