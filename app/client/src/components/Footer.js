import React, { Component } from 'react';

export default class Footer extends Component {
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
            <div className='footer-wrapper'>
                <div className='footer-left'>
                    <p>Achieve Your Goals</p>
                </div>

                <div className='footer-right'>
                    <h2>I'm looking forward to helping you succeed;
                        <br/> let's start something great together.</h2>

                    <p>Start a Conversation</p>

                    <ul className='footer-contact'>
                        <li><a href={`mailto:${this.state.trainer.email}`}>{this.state.trainer.email}</a></li>
                        <li><a href={`tel:${this.state.trainer.phone}`}>{this.state.trainer.phone}</a></li>
                    </ul>

                    <div className='footer-social'>
                        <span>FB</span>
                        <span>IG</span>
                        <span>LI</span>
                    </div>

                    <a href='https://janicedarikho.com/' id='me'>Love the hustle.</a>
                </div>
            </div>
    )}
}