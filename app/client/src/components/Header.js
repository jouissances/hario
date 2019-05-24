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
        fetch(`/api/trainers`)
        .then(response => response.json())
        .then(data => this.setState({
            trainer: data[0]
        }))
        .catch((errors) => {
            console.log(errors)
        })
    }

    render() {
        return (
            <div className='trainer-name'>
                <Link to='/'>{this.state.trainer.name}</Link>
            </div>
    )}
}