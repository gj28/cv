import React from 'react';
import { BsBuilding, BsCalendar3, BsGeoAlt } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Professional Experience</h2>
                    <p className="section-subtitle">My journey in AI and enterprise systems</p>
                </div>
                
                <div className="experience-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="card" style={{ padding: '2rem', backgroundColor: '#0f1115', border: '1px solid #1f2937' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#f8fafc' }}>Associate Software Engineer</h3>
                                
                                <div style={{ display: 'flex', alignItems: 'center', color: '#3b82f6', marginBottom: '0.75rem', gap: '0.5rem', fontSize: '1rem', fontWeight: '500' }}>
                                    <BsBuilding /> <span>Ascendion</span>
                                </div>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><BsCalendar3 /> 2023 - Present</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><BsGeoAlt /> Pune, India</span>
                                    <span style={{ padding: '0.1rem 0.5rem', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '4px', fontSize: '0.75rem', color: '#cbd5e1' }}>Full-time</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>Agentic AI</span>
                                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>BFSI Domain</span>
                            </div>
                        </div>

                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '1.5rem 0' }}>
                            <li style={{ position: 'relative', paddingLeft: '1.25rem', marginBottom: '0.85rem', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#3b82f6', fontWeight: 'bold' }}>•</span>
                                Led development of an AI-driven payment security solution for the BFSI domain, focusing on real-time fraud detection, transaction risk assessment, and intelligent auditing.
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '1.25rem', marginBottom: '0.85rem', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#3b82f6', fontWeight: 'bold' }}>•</span>
                                Engineered a hybrid system combining real-time stream processing, ML-based classification, Agentic RAG, and LLM-based reasoning to balance high recall with minimal customer friction.
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '1.25rem', marginBottom: '0.85rem', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#3b82f6', fontWeight: 'bold' }}>•</span>
                                Developed over 300+ agentic workflows for Ascendion's AI Platform (Aava+), transforming manual financial operations into autonomous AI-driven pipelines.
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '1.25rem', marginBottom: '0.85rem', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#3b82f6', fontWeight: 'bold' }}>•</span>
                                Integrated GraphRAG with Neo4j to drastically reduce false positives in complex financial audits.
                            </li>
                        </ul>

                        <div style={{ marginTop: '1.5rem' }}>
                            <h4 style={{ fontSize: '1rem', color: '#f8fafc', marginBottom: '1rem', fontWeight: 'bold' }}>Technologies Used:</h4>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>LangGraph</span>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>CrewAI</span>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>Kafka / Flink</span>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>Neo4j</span>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>Python</span>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>FastAPI</span>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ padding: '2rem', backgroundColor: '#0f1115', border: '1px solid #1f2937' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#f8fafc' }}>Software Engineer (AI)</h3>
                                
                                <div style={{ display: 'flex', alignItems: 'center', color: '#3b82f6', marginBottom: '0.75rem', gap: '0.5rem', fontSize: '1rem', fontWeight: '500' }}>
                                    <BsBuilding /> <span>Stealth Startup</span>
                                </div>
                                
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><BsCalendar3 /> 2022 - 2023</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><BsGeoAlt /> Pune, India</span>
                                    <span style={{ padding: '0.1rem 0.5rem', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '4px', fontSize: '0.75rem', color: '#cbd5e1' }}>Full-time</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>LLM Security</span>
                                <span style={{ padding: '0.25rem 0.75rem', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>Stealth</span>
                            </div>
                        </div>

                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '1.5rem 0' }}>
                            <li style={{ position: 'relative', paddingLeft: '1.25rem', marginBottom: '0.85rem', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#3b82f6', fontWeight: 'bold' }}>•</span>
                                Architected and built an LLM Security Middleware to prevent prompt injections, filter toxic content, and detect PII data leaks in real-time.
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '1.25rem', marginBottom: '0.85rem', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#3b82f6', fontWeight: 'bold' }}>•</span>
                                Designed a high-throughput, low-latency API architecture enabling enterprise clients to securely integrate LLM capabilities into their applications.
                            </li>
                            <li style={{ position: 'relative', paddingLeft: '1.25rem', marginBottom: '0.85rem', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#3b82f6', fontWeight: 'bold' }}>•</span>
                                Automated cloud deployments and scaled model serving infrastructure across AWS and Azure environments.
                            </li>
                        </ul>

                        <div style={{ marginTop: '1.5rem' }}>
                            <h4 style={{ fontSize: '1rem', color: '#f8fafc', marginBottom: '1rem', fontWeight: 'bold' }}>Technologies Used:</h4>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>Python</span>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>FastAPI</span>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>LLMs</span>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>Docker</span>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>AWS</span>
                                <span style={{ padding: '0.2rem 0.6rem', backgroundColor: '#4ade80', color: '#064e3b', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>Azure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;