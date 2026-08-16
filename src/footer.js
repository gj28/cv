import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontFamily: 'var(--font-mono)' }}>
                    &copy; 2026 Gaurav Jadhao. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;