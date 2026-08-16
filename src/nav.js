import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div className="container nav__container">
                <div className="nav__logo">
                    &lt;AI_Engineer /&gt;
                </div>
                <div className="nav__links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;