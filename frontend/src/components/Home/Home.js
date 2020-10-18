import React, { Component } from 'react';
import Header from '../Header/Header';

class Home extends Component {
    render() { 
        return (  
            <div className='wrapper'>
                <div className='home content'>
                    <Header />
                </div>
            </div>
        );
    }
}
 
export default Home;