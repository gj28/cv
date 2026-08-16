import React from 'react';
import { BsGithub, BsLinkedin, BsDownload, BsPeople, BsStar } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import Terminal from './Terminal';

const Header = () => {
    return (
        <section id="about" className="hero container">
            <div className="hero__content">
                <div className="hero__status">
                    <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem' }}>
                        <span className="status-dot">
                            <span className="status-dot-ping"></span>
                            <span className="status-dot-core"></span>
                        </span>
                        Currently available for new opportunities
                    </span>
                </div>
                <h1 className="hero__title">Gaurav Jadhao</h1>
                <h2 className="hero__subtitle">AI Engineer Associate</h2>
                <p className="hero__desc">
                    I build production-grade Agentic workflows, RAG pipelines, and multi-agent systems that solve real-world problems at scale.
                </p>
                <div className="hero__actions">
                    <a href="#contact" className="btn btn-primary">
                        <BsDownload /> View Resume
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Contact Me
                    </a>
                </div>
                <div className="hero__socials" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <a href="https://github.com/gj28" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.8 }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}><BsGithub size={24} /></a>
                        <a href="https://www.linkedin.com/in/gj28/" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.8 }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}><BsLinkedin size={24} /></a>
                        <a href="https://leetcode.com/u/gj28_/" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.8 }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}><SiLeetcode size={24} /></a>
                        <a href="https://huggingface.co/" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', fontSize: '1.4rem', lineHeight: 1, opacity: 0.8, textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}>🤗</a>
                    </div>
                    <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)' }}></div>
                    <div style={{ display: 'flex', gap: '1.25rem', color: 'var(--text-muted)', fontSize: '0.95rem', fontFamily: 'var(--font-mono)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><BsPeople size={18} /> 4.2k</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><BsStar size={18} /> 1.8k</span>
                    </div>
                </div>
            </div>
            
            <div className="hero__terminal">
                <Terminal />
            </div>
        </section>
    );
};

export default Header;