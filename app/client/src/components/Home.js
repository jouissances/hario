import React, { Component } from 'react';
import { Link } from '../../node_modules/react-router-dom';

import ToolsContainer from '../containers/ToolsContainer';

export default class Home extends Component {

    render() {
        return (
            <div>
                <h2 className='home'>Home</h2>
                <h3 className='hero'>Your new personal trainer</h3>

                <Link to='/about'>Read more about me...</Link>

                <ToolsContainer/>
            </div>
    )}
}