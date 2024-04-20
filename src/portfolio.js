import React from 'react';

import './css/portfolio.css';
import product_destination from './images/POD.png';
import natours from './images/LOGIN_SQL.png';
import trillo from './images/OCEAN.png';
import sociaza from './images/fireb_logo.png'
import FoodOrdering from './images/food shoping.png'
import chat from './images/chat2.png'

const projects = [
    {
        id: 1,
        image: product_destination,
        title: 'AudioWave - Podcast Streaming Application',
        github: 'https://github.com/gj28/Podcast',
        live: 'https://podcast-front.onrender.com',
    },
    {
        id: 2,
        image: sociaza,
        title: 'User Authentication System',
        github: 'https://github.com/gj28/Ang-firebase',
        live: 'https://senselive-fd1ee.web.app/sign-in',
    },
    {
        id: 3,
        image: trillo,
        title: 'OCEAN - Project Management Application',
        github: 'https://github.com/gj28/OCEAN-Project-Management',
        live: 'https://ocean-uktd.onrender.com/',
    },
    {
        id: 4,
        image: natours,
        title: 'Created a Secure Login Page with PHP and MySQL',
        github: 'https://github.com/gj28/PHP-Login',
        live: 'https://gaurxxv.000webhostapp.com/login.php'
    },
    {
        id: 5,
        image: FoodOrdering,
        title: 'FoodOrdering-APP',
        github: 'https://github.com',
        live: '',
    },
    {
        id: 6,
        image: chat,
        title: 'Sweep-chat',
        github: 'https://github.com',
        live: '',
    }
]

class Portfolio extends React.Component {
    render() {
        return(
            <section id="portfolio">
                <h2>Projects I Have Worked On</h2>
                <h1>Featured Projects</h1>

                <div className="container portfolio__container">
                    {
                        projects.map(({id, image, title, github, live}) => {
                            return(
                                <article key={id} className="portfolio__item">
                                    <div className="portfolio__item-image">
                                        <img src={image} alt="Logo" />
                                    </div>
                                    <h2>{title}</h2>
                                    <div className="portfolio__item-cta">
                                        <a className="btn" href={github} target="_blank" rel="noreferrer noopener">Github</a>
                                        {live && <a className="btn btn-primary" href={live} target="_blank" rel="noreferrer noopener">Live Demo</a>}
                                    </div>
                                </article>
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Portfolio;
