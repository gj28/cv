import React from 'react';
import about_me from "./images/pp2.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import './css/about.css'

class About extends React.Component {
    render() {
        return(
            <section id="about">
                <h2>Get To Know</h2>
                <h1>About Me</h1>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={about_me} alt="About Me" />
                        </div>
                    </div>

                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className="about__icon" />
                                <h5>Education</h5>
                                <small>Bachelor's in Computer Engineering</small>
                            </article>

                            <article className="about__card">
                                <VscFolderLibrary className="about__icon" />
                                <h5>Projects</h5>
                                <small>10+ projects</small>
                            </article>
                        </div>

                        <p>
                        Greetings! I'm Gaurav Jadhav, a forward-thinking Computer Science and Engineering student based in Nagpur, India, 
                        currently pursuing my Bachelor's degree at GH Raisoni Institute Of Engineering And Technology. My diverse skill set 
                        encompasses languages like Java, C/C++, JavaScript, and frameworks such as React JS and React Native. As a Software 
                        Development Intern at SenseLive Technologies, I'm actively involved in MEARN stack development, contributing to real-time 
                        projects and implementing backend cloud functions with AWS. I thrive on the challenges of crafting efficient RESTful APIs 
                        using technologies like Node Js, Axios, and Next Js.
                        </p>
                        <p>
                        Beyond coding, I have a strong foundation in ethical hacking, demonstrated during my stint as a DevOps Intern at RedHat, 
                        where I developed an Authentication Bypass tool and conducted comprehensive scans using tools like OWASP ZAP. I believe in 
                        the power of technology to transform ideas into impactful solutions. Let's connect and explore the boundless opportunities in 
                        the dynamic world of technology!
                        </p>

                        <a href="https://github.com/gj28" target="_blank" className="btn btn-primary">
                            View My Projects
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;