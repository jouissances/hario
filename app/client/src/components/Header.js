import React, { Component } from 'react';
import { Link } from '../../node_modules/react-router-dom';
import { fetchTrainer } from '../actions/trainerActions';
import { connect } from 'react-redux';

class Header extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTrainer())
    }

    render() {
        return (
            <div className='trainer-name'>
                <Link to='/'>{this.props.trainer.name}</Link>
            </div>
    )}
}

const mapStateToProps = state => ({
    trainer: state.trainer.trainer,
    loading: state.trainer.loading,
    error: state.trainer.error
})

export default connect(mapStateToProps)(Header)