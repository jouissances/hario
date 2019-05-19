import React, { Component } from 'react';
import Tools from './Tools';

export default class ToolsContainer extends Component {
    state = { tools: [] }

    componentDidMount() {
        fetch(`http://localhost:3001/api/tools`)
        .then(response => response.json())
        .then(data => this.setState({
            tools: data
        }))
        .catch((errors) => {
            console.log('errrrrror')
        })
    }

    render() {
        return (
            <div className='tools-container'>
                <h1>Tools for You</h1>
                <Tools tools={this.state.tools}/>
            </div>
        )
    }
}