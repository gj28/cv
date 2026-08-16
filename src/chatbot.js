import React, { useState, useRef, useEffect } from 'react';
import './css/chatbot.css';
import { BsRobot } from 'react-icons/bs';
import { IoCloseOutline, IoSend } from 'react-icons/io5';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Gaurav's AI Assistant powered by RAG. Ask me anything about his resume, projects, or experience!", isBot: true }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;
        
        const newMessages = [...messages, { text: input, isBot: false }];
        setMessages(newMessages);
        setInput("");

        // Simulate RAG response
        setTimeout(() => {
            let reply = "I'm currently a simulated RAG agent! But Gaurav actually builds these for real. He specializes in Agentic AI, LangGraph, CrewAI, and enterprise-grade automation. Want to know more about his projects?";
            
            const lowerInput = input.toLowerCase();
            if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
                reply = "Gaurav is currently an Associate Software Engineer at Ascendion, building multi-agent workflows for the BFSI sector. He previously worked at a Stealth Startup on LLM Security and at SenseLive on IoT dashboards.";
            } else if (lowerInput.includes('project') || lowerInput.includes('livoo') || lowerInput.includes('tocsi')) {
                reply = "Gaurav has built Livoo (Agentic Property Management), TOCSI (AI Antivirus), and an Agentic Fraud Detection System using Kafka and Flink. He's very strong in AI-driven backends.";
            } else if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack')) {
                reply = "His top skills include LangGraph, CrewAI, RAG, Python, FastAPI, Azure OpenAI, AWS Bedrock, Kafka, Flink, and Neo4j.";
            } else if (lowerInput.includes('contact') || lowerInput.includes('hire') || lowerInput.includes('email')) {
                reply = "You can reach Gaurav at gauravjadhao11@gmail.com or call him at +918087997200. Feel free to use the contact form on this site as well!";
            }

            setMessages([...newMessages, { text: reply, isBot: true }]);
        }, 1000);
    };

    return (
        <div className="chatbot__wrapper">
            {isOpen ? (
                <div className="chatbot__window">
                    <div className="chatbot__header">
                        <div className="chatbot__title">
                            <BsRobot className="chatbot__icon" />
                            <h4>Gaurav.AI</h4>
                        </div>
                        <button className="chatbot__close" onClick={() => setIsOpen(false)}>
                            <IoCloseOutline size={24} />
                        </button>
                    </div>
                    <div className="chatbot__messages">
                        {messages.map((msg, i) => (
                            <div key={i} className={`chatbot__msg ${msg.isBot ? 'bot' : 'user'}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chatbot__input-area">
                        <input 
                            type="text" 
                            placeholder="Ask about Gaurav..." 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend}><IoSend /></button>
                    </div>
                </div>
            ) : (
                <button className="chatbot__fab" onClick={() => setIsOpen(true)}>
                    <BsRobot size={28} />
                </button>
            )}
        </div>
    );
};

export default ChatBot;
