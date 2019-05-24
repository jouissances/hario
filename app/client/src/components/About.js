import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrainer } from '../actions/trainerActions';

class About extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTrainer())
    }

    render() {
        return (
            <div className='about-wrapper'>
                <h2>About</h2>
                <p>{this.props.trainer.description}</p>
            </div>
    )}
}

const mapStateToProps = state => ({
    trainer: state.trainer.trainer,
    loading: state.trainer.loading,
    error: state.trainer.error
})

export default connect(mapStateToProps)(About)