import React, { Component } from 'react';
import { Link } from '../../node_modules/react-router-dom';

import ToolsContainer from '../containers/ToolsContainer';

export default class Home extends Component {

    render() {
        return (
            <div className='home'>
                <div className='home-wrapper'>
                    <div className='hero-wrapper'>
                        <h3 className='hero-text'>Your new
                        <br/> personal trainer</h3>

                        <Link to='/about' className='hero-link'>Read more about me...   <span className='hero-arrow'>&#8594;</span> </Link>
                    </div>
                </div>
                <ToolsContainer/>
            </div>
    )}
}