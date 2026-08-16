import React, { useState, useEffect, useRef } from 'react';

// Virtual Filesystem Definition
const vfs = {
    type: "dir",
    content: {
        "about": { 
            type: "dir", 
            content: { 
                "profile.txt": { type: "file", content: "Gaurav Jadhao\nAI Engineer Associate\nFocus: Agentic AI, GenAI, MLOps\nEmail: gauravjadhao11@gmail.com" } 
            } 
        },
        "experience": { 
            type: "dir", 
            content: { 
                "ascendion.txt": { type: "file", content: "Role: Associate Software Engineer\nCompany: Ascendion\n- Developed 300+ agentic workflows.\n- Built Agentic Fraud Detection System.\n- Integrated RAG pipelines." },
                "stealth.txt": { type: "file", content: "Role: Software Engineer (AI)\nCompany: Stealth Startup\n- Built LLM Security Middleware.\n- Designed high-throughput APIs." }
            } 
        },
        "projects": {
            type: "dir",
            content: {
                "livoo": { 
                    type: "dir", 
                    content: { 
                        "README.md": { type: "file", content: "{\n  \"project\": \"Livoo\",\n  \"role\": \"AI Engineer\",\n  \"technologies\": [\"LangGraph\", \"React\", \"FastAPI\"],\n  \"description\": \"Agentic Property Management system leveraging multi-agent workflows.\"\n}" }
                    } 
                },
                "tocsi": { 
                    type: "dir", 
                    content: { 
                        "README.md": { type: "file", content: "{\n  \"project\": \"TOCSI\",\n  \"role\": \"Creator\",\n  \"technologies\": [\"Python\", \"Local LLMs\"],\n  \"description\": \"AI-powered antivirus platform using advanced behavioral analysis.\"\n}" }
                    } 
                }
            }
        },
        "skills": { 
            type: "dir", 
            content: { 
                "tech_stack.json": { type: "file", content: "{\n  \"AI/ML\": [\"LangGraph\", \"CrewAI\", \"RAG\", \"OpenAI\", \"Bedrock\"],\n  \"Backend\": [\"Python\", \"FastAPI\", \"Node.js\"],\n  \"Data\": [\"Kafka\", \"Flink\", \"Neo4j\", \"PostgreSQL\"],\n  \"Cloud/DevOps\": [\"Docker\", \"Kubernetes\", \"AWS\", \"Azure\"]\n}" } 
            } 
        }
    }
};

const resolvePath = (currentPath, targetPath) => {
    if (!targetPath) return { node: null, path: currentPath, error: "Usage: command <directory/file>" };
    
    let parts = targetPath.split('/').filter(p => p !== '');
    let absPath = targetPath.startsWith('/') ? [] : [...currentPath];
    
    for (let part of parts) {
        if (part === '.') continue;
        if (part === '..') {
            if (absPath.length > 0) absPath.pop();
        } else {
            absPath.push(part);
        }
    }
    
    let currNode = vfs;
    let validPath = [];
    for (let part of absPath) {
        if (currNode.type !== 'dir' || !currNode.content[part]) {
            return { node: null, path: currentPath, error: `directory or file '${targetPath}' not found.` };
        }
        currNode = currNode.content[part];
        validPath.push(part);
    }
    
    return { node: currNode, path: validPath, error: null };
};

const getTree = (node, prefix = "") => {
    let result = "";
    if (node.type === 'file') return result;
    const entries = Object.keys(node.content);
    entries.forEach((key, index) => {
        const isLast = index === entries.length - 1;
        const branch = isLast ? "└── " : "├── ";
        result += `${prefix}${branch}${key}\n`;
        if (node.content[key].type === 'dir') {
            result += getTree(node.content[key], prefix + (isLast ? "    " : "│   "));
        }
    });
    return result;
};

const Terminal = () => {
    const [lines, setLines] = useState([]);
    const [currentPath, setCurrentPath] = useState([]); // [] means root '/'
    const [userInput, setUserInput] = useState("");
    const [isInteractive, setIsInteractive] = useState(false); // Start false for animation
    const [currentStep, setCurrentStep] = useState(0);
    const [typingText, setTypingText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    
    const inputRef = useRef(null);
    const terminalBodyRef = useRef(null);

    const script = [
        { type: 'command', text: 'whoami' },
        { type: 'output', text: 'gaurav' },
        { type: 'command', text: "pip list | grep -E '(torch|tensorflow|transformers)'" },
        { type: 'output', text: "torch 2.1.0" },
        { type: 'output', text: "transformers 4.35.2" },
        { type: 'output', text: "tensorflow 2.14.0" },
        { type: 'command', text: "nvidia-smi --query-gpu=name --format=csv,noheader" },
        { type: 'output', text: "NVIDIA A100-SXM4-80GB" },
        { type: 'command', text: "echo $STATUS" },
        { type: 'output-green', text: "Ready to build the future with AI ✨" },
        { type: 'output', text: "--------------------------------------------------" },
        { type: 'output', text: "Terminal ready. Type 'help' to see available commands or explore the virtual resume filesystem." }
    ];

    useEffect(() => {
        if (currentStep >= script.length) {
            setIsTyping(false);
            setIsInteractive(true);
            return;
        }

        const step = script[currentStep];

        if (step.type === 'command') {
            setIsTyping(true);
            let i = 0;
            const typingInterval = setInterval(() => {
                setTypingText(step.text.substring(0, i + 1));
                i++;
                if (i >= step.text.length) {
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        setLines(prev => [...prev, { ...step }]);
                        setTypingText("");
                        setCurrentStep(prev => prev + 1);
                    }, 300);
                }
            }, 50);
            
            return () => clearInterval(typingInterval);
        } else {
            setIsTyping(false);
            const timer = setTimeout(() => {
                setLines(prev => [...prev, { ...step }]);
                setCurrentStep(prev => prev + 1);
            }, 150);
            return () => clearTimeout(timer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStep]);

    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [lines, userInput]);

    const printPrompt = (path) => {
        const p = path.length === 0 ? '' : '/' + path.join('/');
        return `gaurav@ai-resume:~${p}$ `;
    };

    const handleTerminalSubmit = (e) => {
        if (e.key === 'Enter') {
            const commandLine = userInput.trim();
            if (!commandLine) {
                setLines(prev => [...prev, { type: 'prompt', text: printPrompt(currentPath) }]);
                return;
            }

            const promptText = printPrompt(currentPath) + commandLine;
            setLines(prev => [...prev, { type: 'prompt-echo', text: promptText }]);
            setUserInput("");

            processCommand(commandLine);
        }
    };

    const processCommand = (commandLine) => {
        const args = commandLine.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
        const cmd = args[0].toLowerCase();
        const params = args.slice(1).map(p => p.replace(/"/g, ''));

        let outputLines = [];

        try {
            switch (cmd) {
                case 'ls': {
                    const target = params[0] || '.';
                    const res = resolvePath(currentPath, target);
                    if (res.error) { outputLines.push({ type: 'output', text: res.error }); break; }
                    if (res.node.type !== 'dir') { outputLines.push({ type: 'output', text: `${target} is a file.` }); break; }
                    
                    const keys = Object.keys(res.node.content);
                    if (keys.length === 0) {
                        outputLines.push({ type: 'output', text: "Directory is empty." });
                    } else {
                        const formatted = keys.map(k => res.node.content[k].type === 'dir' ? `${k}/` : k).join('  ');
                        outputLines.push({ type: 'output', text: formatted });
                    }
                    break;
                }
                case 'pwd': {
                    outputLines.push({ type: 'output', text: '/' + currentPath.join('/') });
                    break;
                }
                case 'cd': {
                    if (params.length === 0) {
                        outputLines.push({ type: 'output', text: "Usage: cd <directory>" });
                        break;
                    }
                    if (params.length > 1) {
                        outputLines.push({ type: 'output', text: "Usage: cd <directory> (too many arguments)" });
                        break;
                    }
                    const res = resolvePath(currentPath, params[0]);
                    if (res.error) {
                        if (res.error.includes("not found")) {
                            outputLines.push({ type: 'output', text: `Error: directory '${params[0]}' not found.` });
                        } else {
                            outputLines.push({ type: 'output', text: res.error });
                        }
                        break;
                    }
                    if (res.node.type !== 'dir') {
                        outputLines.push({ type: 'output', text: `Error: ${params[0]} is a file, not a directory.` });
                        break;
                    }
                    setCurrentPath(res.path);
                    break;
                }
                case 'cat': {
                    if (params.length === 0) { outputLines.push({ type: 'output', text: "Usage: cat <file>" }); break; }
                    const res = resolvePath(currentPath, params[0]);
                    if (res.error) { outputLines.push({ type: 'output', text: res.error }); break; }
                    if (res.node.type === 'dir') { outputLines.push({ type: 'output', text: `Error: ${params[0]} is a directory.` }); break; }
                    outputLines.push({ type: 'output', text: res.node.content });
                    break;
                }
                case 'tree': {
                    const res = resolvePath(currentPath, params[0] || '.');
                    if (res.error) { outputLines.push({ type: 'output', text: res.error }); break; }
                    if (res.node.type !== 'dir') { outputLines.push({ type: 'output', text: `Error: ${params[0]} is a file.` }); break; }
                    const treeStr = getTree(res.node);
                    outputLines.push({ type: 'output', text: `.\n${treeStr}` });
                    break;
                }
                case 'grep': {
                    if (params.length < 2) { outputLines.push({ type: 'output', text: "Usage: grep <pattern> <file>" }); break; }
                    const pattern = params[0].toLowerCase();
                    const targetFile = params[1];
                    const res = resolvePath(currentPath, targetFile);
                    if (res.error) { outputLines.push({ type: 'output', text: res.error }); break; }
                    if (res.node.type === 'dir') { outputLines.push({ type: 'output', text: `Error: ${targetFile} is a directory.` }); break; }
                    
                    const matches = res.node.content.split('\n').filter(l => l.toLowerCase().includes(pattern));
                    if(matches.length > 0) {
                        outputLines.push({ type: 'output', text: matches.join('\n') });
                    }
                    break;
                }
                case 'find': {
                    if (params.length === 0) { outputLines.push({ type: 'output', text: "Usage: find <name>" }); break; }
                    // simple recursive find
                    const search = (node, pathStr) => {
                        let found = [];
                        Object.keys(node.content).forEach(k => {
                            const p = `${pathStr}/${k}`;
                            if (k.toLowerCase().includes(params[0].toLowerCase())) found.push(p);
                            if (node.content[k].type === 'dir') {
                                found = found.concat(search(node.content[k], p));
                            }
                        });
                        return found;
                    };
                    const res = search(vfs, "");
                    if(res.length > 0) {
                        outputLines.push({ type: 'output', text: res.join('\n') });
                    } else {
                        outputLines.push({ type: 'output', text: "No matches found." });
                    }
                    break;
                }
                case 'head':
                case 'tail': {
                    if (params.length === 0) { outputLines.push({ type: 'output', text: `Usage: ${cmd} <file>` }); break; }
                    const res = resolvePath(currentPath, params[0]);
                    if (res.error) { outputLines.push({ type: 'output', text: res.error }); break; }
                    if (res.node.type === 'dir') { outputLines.push({ type: 'output', text: `Error: ${params[0]} is a directory.` }); break; }
                    const contentLines = res.node.content.split('\n');
                    const n = 3; // return 3 lines for brevity
                    const out = cmd === 'head' ? contentLines.slice(0, n) : contentLines.slice(-n);
                    outputLines.push({ type: 'output', text: out.join('\n') });
                    break;
                }
                case 'help': {
                    outputLines.push({ type: 'output', text: `Basic Commands:
ls, pwd, cd, cat, find, grep, head, tail, tree, clear

AI Resume Commands:
analyze     - Analyze the complete resume.
skills      - Extract technical skills.
experience  - Summarize professional experience.
projects    - List projects with technologies and impact.
achievements- Extract measurable achievements.
match <jd>  - Assessment of resume-to-JD match.
gaps <jd>   - Identify missing skills/experience.
tailor <jd> - Generate a tailored resume.
explain <t> - Explain where/how a technology appears in the resume.` });
                    break;
                }
                case 'clear': {
                    setLines([]);
                    inputRef.current?.focus();
                    return;
                }
                // AI Commands
                case 'analyze': {
                    outputLines.push({ type: 'output', text: "{\n  \"candidate\": \"Gaurav Jadhao\",\n  \"status\": \"Highly Qualified\",\n  \"core_competencies\": [\"Agentic AI\", \"RAG\", \"Backend Architecture\"],\n  \"summary\": \"Experienced AI Engineer with production deployments in BFSI and Security domains.\"\n}" });
                    break;
                }
                case 'skills': {
                    outputLines.push({ type: 'output', text: "> Extracting skills...\n- LangGraph, CrewAI, RAG\n- Python, FastAPI, React\n- Kafka, Flink, Postgres\n- Docker, AWS, Azure" });
                    break;
                }
                case 'experience': {
                    outputLines.push({ type: 'output', text: "1. Ascendion (Associate Software Engineer): Multi-agent workflows, BFSI fraud detection, RAG pipelines.\n2. Stealth Startup (Software Engineer AI): LLM Security Middleware, Prompt Injection protection." });
                    break;
                }
                case 'projects': {
                    outputLines.push({ type: 'output', text: "- Livoo: Agentic Property Management (LangGraph, FastAPI)\n- TOCSI: AI Antivirus Platform (Python, Local LLMs)" });
                    break;
                }
                case 'achievements': {
                    outputLines.push({ type: 'output', text: "- Developed 300+ agentic workflows for Aava+.\n- Reduced false positives in financial audits using GraphRAG.\n- Built high-throughput LLM security APIs." });
                    break;
                }
                case 'match': {
                    if (params.length === 0) { outputLines.push({ type: 'output', text: "Usage: match <job_description>" }); break; }
                    outputLines.push({ type: 'output', text: `{\n  \"query\": \"${params.join(' ')}\",\n  \"match_score\": \"92%\",\n  \"reason\": \"Candidate has extensive experience with LangGraph, RAG, and Python backend systems matching the job requirements.\"\n}` });
                    break;
                }
                case 'gaps': {
                    if (params.length === 0) { outputLines.push({ type: 'output', text: "Usage: gaps <job_description>" }); break; }
                    outputLines.push({ type: 'output', text: `{\n  \"missing_skills\": [],\n  \"analysis\": \"Gaurav covers all modern GenAI requirements. No significant gaps found for standard AI Engineering roles.\"\n}` });
                    break;
                }
                case 'tailor': {
                    if (params.length === 0) { outputLines.push({ type: 'output', text: "Usage: tailor <job_description>" }); break; }
                    outputLines.push({ type: 'output', text: `> Generating tailored resume for '${params[0]}'...\n[PDF Generated in memory]` });
                    break;
                }
                case 'explain': {
                    if (params.length === 0) { outputLines.push({ type: 'output', text: "Usage: explain <topic>" }); break; }
                    outputLines.push({ type: 'output', text: `Gaurav has applied ${params[0]} extensively in production. Check /projects or /experience for specific implementation details.` });
                    break;
                }
                default: {
                    // Check if it's an ambiguous RAG query
                    if (cmd.length > 2) {
                        outputLines.push({ type: 'output', text: `{\n  "query": "${commandLine}",\n  "results": [\n    {\n      "section": "General RAG Index",\n      "relevance": 0.85,\n      "source": "memory"\n    }\n  ],\n  "message": "Command not found: ${cmd}. Treated as semantic query."\n}` });
                    } else {
                        outputLines.push({ type: 'output', text: `Command not found: ${cmd}\nType 'help' to see available commands.` });
                    }
                    break;
                }
            }
        } catch (err) {
            outputLines.push({ type: 'output', text: `Error processing command: ${err.message}` });
        }

        setLines(prev => [...prev, ...outputLines]);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 100);
    };

    return (
        <div className="terminal" onClick={() => isInteractive && inputRef.current?.focus()}>
            <div className="terminal__header">
                <div className="terminal__dot red"></div>
                <div className="terminal__dot yellow"></div>
                <div className="terminal__dot green"></div>
                <span style={{ marginLeft: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#a1a1aa'}}>terminal</span>
            </div>
            <div ref={terminalBodyRef} className="terminal__body" style={{ minHeight: '380px', maxHeight: '380px', overflowY: 'auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {lines.map((line, idx) => {
                    if (line.type === 'command') {
                        return (
                            <div key={idx}>
                                <span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>$</span>
                                <span style={{ color: '#60a5fa' }}>{line.text}</span>
                            </div>
                        );
                    } else if (line.type === 'prompt-echo') {
                        return (
                            <div key={idx}>
                                <span style={{ color: '#60a5fa' }}>{line.text}</span>
                            </div>
                        );
                    } else if (line.type === 'output-green') {
                        return <div key={idx} style={{ color: '#4ade80' }}>{line.text}</div>;
                    } else {
                        return <div key={idx} style={{ color: '#a1a1aa', whiteSpace: 'pre-wrap', marginBottom: '0.25rem' }}>{line.text}</div>;
                    }
                })}

                {isInteractive && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', position: 'relative', marginTop: '0.25rem' }}>
                        <span style={{ color: '#60a5fa', whiteSpace: 'pre' }}>{printPrompt(currentPath)}{userInput}</span>
                        <span className="terminal__cursor"></span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={handleTerminalSubmit}
                            autoComplete="off"
                            spellCheck="false"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                opacity: 0,
                                cursor: 'text'
                            }}
                            autoFocus
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Terminal;
