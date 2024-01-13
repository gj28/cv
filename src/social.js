import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import {SiGeeksforgeeks } from 'react-icons/si';


class Social extends React.Component {
    render() {
        return(
            <div className="header__socials">
                <a href="https://www.linkedin.com/in/gj28/" target="_blank">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/gj28" target="_blank">
                    <BsGithub />
                </a>
                <a href="https://auth.geeksforgeeks.org/user/gj28" target="_blank">
                    <SiGeeksforgeeks />
                </a>
            </div>
        );
    }
}

export default Social