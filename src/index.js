import React from 'react';
import { createRoot } from 'react-dom/client';

import Nav from './nav';
import Header from './header';
import Skills from './about';
import Experience from './achievement';
import Projects from './portfolio';
import ContactMe from './contact_me';
import Footer from './footer';

import './css/index.css';

class App extends React.Component {
    render() {
        return(
            <>
                <Nav />
                <Header />
                <Skills />
                <Experience />
                <Projects />
                <ContactMe />
                <Footer />
            </>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />)