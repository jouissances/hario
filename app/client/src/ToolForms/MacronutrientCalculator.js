import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../actions/logActions';

class MacronutrientCalculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step: 0,
            age: '29',
            sex: 'male',
            current_weight: '88',
            current_height: '183',
            activity_level: 'sedentary',
            current_goal: 'maintain',
            loading: false,
            error: null,
            tool: this.props.title,
            results: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // nextStep = () => {
    //     this.setState({
    //         step: this.state.step + 1
    //     })
    // }

    // prevStep = () => {
    //     this.setState({
    //         step: this.state.step - 1
    //     })
    // }

    handleSubmit = event => {
        event.preventDefault()
        this.props.dispatch(fetchResults({
            age: this.state.age,
            sex: this.state.sex,
            current_weight: this.state.current_weight,
            current_height: this.state.current_height,
            activity_level: this.state.activity_level,
            current_goal: this.state.current_goal,
            tool: this.state.tool
        }))
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label htmlFor='age'>What is your age? </label>
                <input type='number' name='age' id='age' min='18' max='120' value={this.state.age} onChange={(event) => this.handleChange(event)} /> <br/>

                <label htmlFor='sex'>What is your sex? </label>
                <input type='radio' name='sex' id='sex' value='female' onChange={(event) => this.handleChange(event)}/>Female
                <input type='radio' name='sex' id='sex' value='male' onChange={(event) => this.handleChange(event)}/>Male
                <input type='radio' name='sex' id='sex' value='other' onChange={(event) => this.handleChange(event)}/>Other <br/>

                <label htmlFor='current_weight'>What is your current weight, in kg? </label>
                <input type='number' name='current_weight' id='current_weight' min='35' max='150' value={this.state.current_weight} onChange={(event) => this.handleChange(event)} /> <br/>

                <label htmlFor='current_height'>What is your current height, in cm? </label>
                <input type='number' name='current_height' id='current_height' min='100' max='200' value={this.state.current_height} onChange={(event) => this.handleChange(event)} /> <br/>

                <label htmlFor='activity_level'>What is your current activity level?</label>
                {/* <div class='tooltip'>?</div>
                <span class='tooltip-text'>Hello!</span> */}
                <select name='activity_level' id='activity_level' value={this.state.activity_level} onChange={(event) => this.handleChange(event)}>
                    <option value='sedentary'>Sedentary</option>
                    <option value='light'>Light</option>
                    <option value='medium'>Medium</option>
                    <option value='intense'>Intense</option>
                </select> <br/>
                
                <label htmlFor='current_goal'>What is your current fitness goal?</label>
                {/* <div class='tooltip'>?</div>
                <span class='tooltip-text'>Hello!</span> */}
                <select name='current_goal' id='current_goal' value={this.state.current_goal} onChange={(event) => this.handleChange(event)}>
                    <option value='maintain'>Maintain Weight</option>
                    <option value='lose'>Lose Weight</option>
                    <option value='gain'>Gain Weight</option>
                </select> <br/>

                <p className='results'>{this.props.results}</p>

                <input type='submit'/>

            </form>
        )
    }
}

const mapStateToProps = state => ({
    results: state.logs.results,
    loading: state.logs.loading,
    error: state.logs.error
})

export default connect(mapStateToProps)(MacronutrientCalculator)