import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        return (  
            <div className='wrapper'>
                <div class='footer content'>
                    <div className='footer-left'>
                        <img className='footer-logo' src='' alt='Karin' />
                        <p><small>&copy; 2020 Karin Ikenaga</small></p>
                    </div>
                    <ul className='footer-right'>
                        <li><a>Home</a></li>
                        <li><a>About Me</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Footer;