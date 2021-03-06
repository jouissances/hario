import React, { Component } from 'react';
import { Link } from '../../node_modules/react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trainer: ''
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/trainers`)
        .then(response => response.json())
        .then(data => this.setState({
            trainer: data[0]
        }))
        .catch((errors) => {
            console.log('errrrrror')
        })
    }

    render() {
        return (
            <div>
                <Link to='/'>{this.state.trainer.name}</Link>
            </div>
    )}
}