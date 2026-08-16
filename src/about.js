import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technical Expertise</h2>
                    <p className="section-subtitle">Comprehensive stack for building production AI systems</p>
                </div>
                
                <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    
                    {/* Generative AI & Agentic AI */}
                    <div className="card">
                        <div className="card-header">
                            <span style={{width: '8px', height: '8px', backgroundColor: '#fafafa', borderRadius: '50%', marginRight: '12px'}}></span>
                            Generative AI & Agentic AI
                        </div>
                        <div className="card-body">
                            <SkillItem name="LangGraph / CrewAI" level="Expert" progress="95%" badgeColor="#8b5cf6" />
                            <SkillItem name="AutoGen / DSPy" level="Advanced" progress="80%" badgeColor="#22c55e" />
                            <SkillItem name="Multi-Agent Orchestration" level="Expert" progress="90%" badgeColor="#8b5cf6" />
                        </div>
                    </div>

                    {/* RAG & Knowledge Systems */}
                    <div className="card">
                        <div className="card-header">
                            <span style={{width: '8px', height: '8px', backgroundColor: '#fafafa', borderRadius: '50%', marginRight: '12px'}}></span>
                            RAG & Knowledge Systems
                        </div>
                        <div className="card-body">
                            <SkillItem name="Advanced RAG / GraphRAG" level="Expert" progress="95%" badgeColor="#8b5cf6" />
                            <SkillItem name="LangChain / LlamaIndex" level="Expert" progress="90%" badgeColor="#8b5cf6" />
                            <SkillItem name="Semantic Search Strategy" level="Advanced" progress="85%" badgeColor="#22c55e" />
                        </div>
                    </div>

                    {/* LLMs & Multimodal AI */}
                    <div className="card">
                        <div className="card-header">
                            <span style={{width: '8px', height: '8px', backgroundColor: '#fafafa', borderRadius: '50%', marginRight: '12px'}}></span>
                            LLMs & Multimodal AI
                        </div>
                        <div className="card-body">
                            <SkillItem name="OpenAI / Claude / Gemini" level="Expert" progress="95%" badgeColor="#8b5cf6" />
                            <SkillItem name="Llama 3 / Mistral (Local)" level="Advanced" progress="85%" badgeColor="#22c55e" />
                            <SkillItem name="LoRA / Fine-Tuning" level="Intermediate" progress="70%" badgeColor="#3b82f6" />
                        </div>
                    </div>

                    {/* LLMOps & Observability */}
                    <div className="card">
                        <div className="card-header">
                            <span style={{width: '8px', height: '8px', backgroundColor: '#fafafa', borderRadius: '50%', marginRight: '12px'}}></span>
                            LLMOps & Observability
                        </div>
                        <div className="card-body">
                            <SkillItem name="LangSmith / Phoenix" level="Advanced" progress="85%" badgeColor="#22c55e" />
                            <SkillItem name="Promptfoo / TruLens" level="Advanced" progress="80%" badgeColor="#22c55e" />
                            <SkillItem name="Prompt Engineering" level="Expert" progress="95%" badgeColor="#8b5cf6" />
                        </div>
                    </div>

                    {/* Backend & Architecture */}
                    <div className="card">
                        <div className="card-header">
                            <span style={{width: '8px', height: '8px', backgroundColor: '#fafafa', borderRadius: '50%', marginRight: '12px'}}></span>
                            Backend Development
                        </div>
                        <div className="card-body">
                            <SkillItem name="Python / FastAPI" level="Expert" progress="95%" badgeColor="#8b5cf6" />
                            <SkillItem name="Kafka / Event-Driven" level="Advanced" progress="80%" badgeColor="#22c55e" />
                            <SkillItem name="Microservices Design" level="Advanced" progress="85%" badgeColor="#22c55e" />
                        </div>
                    </div>

                    {/* Databases & Cloud */}
                    <div className="card">
                        <div className="card-header">
                            <span style={{width: '8px', height: '8px', backgroundColor: '#fafafa', borderRadius: '50%', marginRight: '12px'}}></span>
                            Databases & Vector Stores
                        </div>
                        <div className="card-body">
                            <SkillItem name="Neo4j (Graph DB)" level="Advanced" progress="85%" badgeColor="#22c55e" />
                            <SkillItem name="Qdrant / Milvus / Chroma" level="Expert" progress="90%" badgeColor="#8b5cf6" />
                            <SkillItem name="AWS / Azure / Docker" level="Advanced" progress="80%" badgeColor="#22c55e" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const SkillItem = ({ name, level, progress, badgeColor }) => (
    <div className="skill-item">
        <div className="skill-item__header">
            <span className="skill-item__name">{name}</span>
            <span className="badge" style={{ backgroundColor: badgeColor, color: '#fff', border: 'none' }}>{level}</span>
        </div>
        <div className="skill-item__bar">
            <div className="skill-item__progress" style={{ width: progress }}></div>
        </div>
    </div>
);

export default Skills;