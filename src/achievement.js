import React from 'react';

import './css/achievement.css';

class Achievement extends React.Component {
    render() {
        return(
            <section id="achievements">
                <h2>Milestones I Have Achieved</h2>
                <h1>My Timeline</h1>

                <div className="timeline">
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2020</h2>
                            <h3>Coding and Ethical Hacking Club (GHRIETN)</h3>
                        </div>
                    </div>
                    <div className="timeline__card right">
                        <div className="timeline__content">
                            <h2>2021</h2>
                            <h3>Internship at TalaKunchi Networks Pvt Ltd</h3>
                        </div>
                    </div>
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2022</h2>
                            <h3>DevOps Intern | RedHat</h3>
                        </div>
                    </div>
                    <div className="timeline__card right">
                        <div className="timeline__content">
                            <h2>2023</h2>
                            <h3>SenseLive Technologies - Best Backend Dev Team Award</h3>
                        </div>
                    </div>
                    <div className="timeline__card left">
                        <div className="timeline__content">
                            <h2>2024</h2>
                            <h3>Rank #1 In Institute On GFG</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Achievement;