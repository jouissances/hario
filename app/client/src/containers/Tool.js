import React, { Component } from 'react';

import MacronutrientCalculator from '../ToolForms/MacronutrientCalculator';

const Components = {
    MacronutrientCalculator: MacronutrientCalculator
}

export default class Tool extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tool: {}
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/tools`)
        .then(response => response.json())
        .then(data => {
            this.getTool(data[0].id)
        })
        .catch((errors) => {
            console.log('errrrrror')
        })
    }

    getTool(id) {
        fetch(`http://localhost:3001/api/tools/${id}`)
        .then(response => response.json())
        .then(data => this.setState({
            tool: data
        }))
        .catch((errors) => {
            console.log(errors)
        })
    }

    renderTool() {
        if (this.state.tool.tool) {
            const type = this.state.tool.tool.split(' ').join('')
            const ComponentName = Components[type]
            return <ComponentName />
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.tool.tool}</h2>
                <p>{this.state.tool.long_description}</p>
                {this.renderTool()}
            </div>
    )}
}