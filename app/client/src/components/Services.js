import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServices } from '../actions/servicesActions';

class Services extends Component {
    componentDidMount() {
        this.props.dispatch(fetchServices())
    }

    render() {
        const { services } = this.props
        return (
            <div className='services-wrapper'>
                {services.map((service, index) => (
                    <div className='service-wrapper' key={index}>
                        <h2>{service.service}</h2>  
                        <p>{service.service_description}</p>
                    </div>
                ))}
            </div>
    )}
}

const mapStateToProps = state => ({
    services: state.services.services,
    loading: state.services.loading,
    error: state.services.error
})

export default connect(mapStateToProps)(Services)