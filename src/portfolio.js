import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Open source projects and agentic architectures</p>
                </div>
                
                <div className="projects-grid">
                    <div className="card project-card">
                        <div className="project-card__content">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <h3 className="project-card__title">Livoo</h3>
                                <span className="badge badge-primary">Agentic PM</span>
                            </div>
                            <p className="project-card__desc">
                                An Agentic Property Management system leveraging multi-agent workflows to handle maintenance requests, lease scheduling, and tenant queries autonomously. 
                            </p>
                            <div className="tags">
                                <span className="badge">LangGraph</span>
                                <span className="badge">React</span>
                                <span className="badge">FastAPI</span>
                                <span className="badge">In Progress</span>
                            </div>
                        </div>
                        <div className="project-card__footer">
                            <a href="https://github.com/gj28/livoo" target="_blank" rel="noreferrer" className="btn btn-outline">
                                <BsGithub /> Code
                            </a>
                            <a href="https://livoo.in" target="_blank" rel="noreferrer" className="btn btn-primary">
                                Live Demo
                            </a>
                        </div>
                    </div>

                    <div className="card project-card">
                        <div className="project-card__content">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <h3 className="project-card__title">TOCSI</h3>
                                <span className="badge badge-primary">Cybersecurity</span>
                            </div>
                            <p className="project-card__desc">
                                An AI-powered antivirus platform that uses advanced behavioral analysis and localized LLM reasoning to detect and quarantine zero-day threats.
                            </p>
                            <div className="tags">
                                <span className="badge">Python</span>
                                <span className="badge">Local LLMs</span>
                                <span className="badge">Cybersecurity</span>
                            </div>
                        </div>
                        <div className="project-card__footer">
                            <a href="https://github.com/gj28/tocsi" target="_blank" rel="noreferrer" className="btn btn-outline">
                                <BsGithub /> Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
