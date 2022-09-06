import React from 'react';
import './index.scss';

const Header = () => {
    return (
        <footer className="bck_black">
            <div className="font_righteous footer_logo_venue">React Quiz</div>
            <div className="footer_copyright">
                Made with  
            <span style={{color : 'crimson'}}>♥</span> By 
            <a href="http://www.github.com/NAF-FLY" target="_blank" rel="noopener noreferrer"> NAF-FLY 
            </a>
            
            </div>
        </footer>
    );
};

export default Header;