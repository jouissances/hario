import React, { Component } from 'react';
import Tools from '../components/Tools';

export default class ToolsContainer extends Component {
    state = { tools: [] }

    componentDidMount() {
        fetch(`/api/tools`)
        .then(response => response.json())
        .then(data => this.setState({
            tools: data
        }))
        .catch((errors) => {
            console.log(errors)
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