import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";

import './css/experience.css'

class Experience extends React.Component {
    render() {
        return(
            <section id="experience">
                <h2>Technical Stack</h2>
                <h1>AI & Backend Expertise</h1>

                <div className="container experience__container">
                    <div className="experience__languages">
                        <h2>Generative AI & RAG</h2>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>LangGraph & CrewAI</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Agentic RAG & GraphRAG</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>LLMs & Multimodal AI</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Vector Stores</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>LLMOps (LangSmith)</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Prompt Engineering</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className="experience__frameworks">
                        <h2>Backend & Cloud</h2>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Python & FastAPI</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>PostgreSQL & MongoDB</h3>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Neo4j</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>AWS & Azure</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Docker & Kubernetes</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h3>Microservices</h3>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;