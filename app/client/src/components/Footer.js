import React, { Component } from 'react';

export default class Footer extends Component {
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
                        <li><a href='mailto:harrisonxxx@gmail.com'>harrisonxxx@gmail.com</a></li>
                        <li><a href='tel:6588889999'>+65 8888 9999</a></li>
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