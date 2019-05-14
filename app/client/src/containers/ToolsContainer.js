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
            <Tools tools={this.state.tools}/>
        )
    }
}