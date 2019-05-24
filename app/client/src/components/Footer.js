import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrainer } from '../actions/trainerActions';

class Footer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTrainer())
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
                        <li><a href={`mailto:${this.props.trainer.email}`}>{this.props.trainer.email}</a></li>
                        <li><a href={`tel:${this.props.trainer.phone}`}>{this.props.trainer.phone}</a></li>
                    </ul>

                    <div className='footer-social'>
                        <span><a href={`http://facebook.com/${this.props.trainer.facebook}`}>FB</a></span>
                        <span><a href={`http://instagram.com/${this.props.trainer.instagram}`}>IG</a></span>
                        <span><a href={`http://linkedin.com/in/${this.props.trainer.linkedin}`}>LI</a></span>
                    </div>

                    <a href='https://janicedarikho.com/' id='me'>Love the hustle.</a>
                </div>
            </div>
    )}
}

const mapStateToProps = state => ({
    trainer: state.trainer.trainer,
    loading: state.trainer.loading,
    error: state.trainer.error
})

export default connect(mapStateToProps)(Footer)