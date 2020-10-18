import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return (  
            <div className='wrapper'>
                <div className='header content'>
                    <a href='#'><img className='header-logo' src='' alt='Karin' /></a>
                    <ul className='navbar'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Me</a></li>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>Contact</a></li>
                        <ul className='language'>
                            <li><a href='#'>English</a></li>
                            <li><a href='#'>日本語</a></li>
                        </ul>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Header;