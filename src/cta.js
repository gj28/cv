import React from 'react';

class CTA extends React.Component {
    render() {
        return(
            <div className="cta">
                <a className="btn" href="https://drive.google.com/drive/folders/1ysiF8jfDbxQVfgWIvuw0jHZcZP1l4Lmc?usp=sharing" target="_blank">Download Resume</a>
                <a className="btn btn-primary" href="#contact">Let's Talk</a>
            </div>
        );
    }
}

export default CTA