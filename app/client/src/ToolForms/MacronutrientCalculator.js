import React, { Component } from 'react';

export default class MacronutrientCalculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: '',
            sex: '',
            current_weight: '',
            current_height: '',
            activity_level: 'sedentary',
            current_goal: 'maintain',
            results: ''
        }
    }

    addLog = () => {
        fetch(`http://localhost:3001/api/logs/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                age: this.state.age,
                sex: this.state.sex,
                current_weight: this.state.current_weight,
                current_height: this.state.current_height,
                activity_level: this.state.activity_level,
                current_goal: this.state.current_goal
            })
        })
        .then(response => response.json())
        .then(data => this.showResults(data['id']))
        .catch(error => console.log('ERRRRROR'))
    }

    showResults = id => {
        if (id !== undefined) {
            fetch(`http://localhost:3001/api/logs/${id}`)
            .then(response => response.json())
            .then(data => this.setState({
                results: data['results']
            }))
            .catch(error => console.log('ERRRRROR'))
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.addLog()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label for='age'>What is your age? </label>
                <input type='number' name='age' id='age' min='18' max='120' value={this.state.age} onChange={(event) => this.handleChange(event)} /> <br/>

                <label for='sex'>What is your sex? </label>
                <input type='radio' name='sex' id='sex' value='female' onChange={(event) => this.handleChange(event)}/>Female
                <input type='radio' name='sex' id='sex' value='male' onChange={(event) => this.handleChange(event)}/>Male
                <input type='radio' name='sex' id='sex' value='other' onChange={(event) => this.handleChange(event)}/>Other <br/>

                <label for='current_weight'>What is your current weight, in kg? </label>
                <input type='number' name='current_weight' id='current_weight' min='35' max='150' value={this.state.current_weight} onChange={(event) => this.handleChange(event)} /> <br/>

                <label for='current_height'>What is your current height, in cm? </label>
                <input type='number' name='current_height' id='current_height' min='100' max='200' value={this.state.current_height} onChange={(event) => this.handleChange(event)} /> <br/>

                <label for='activity_level'>What is your current activity level?</label>
                {/* <div class='tooltip'>?</div>
                <span class='tooltip-text'>Hello!</span> */}
                <select name='activity_level' id='activity_level' value={this.state.activity_level} onChange={(event) => this.handleChange(event)}>
                    <option value='sedentary'>Sedentary</option>
                    <option value='light'>Light</option>
                    <option value='medium'>Medium</option>
                    <option value='intense'>Intense</option>
                </select> <br/>
                
                <label for='current_goal'>What is your current fitness goal?</label>
                {/* <div class='tooltip'>?</div>
                <span class='tooltip-text'>Hello!</span> */}
                <select name='current_goal' id='current_goal' value={this.state.current_goal} onChange={(event) => this.handleChange(event)}>
                    <option value='maintain'>Maintain Weight</option>
                    <option value='lose'>Lose Weight</option>
                    <option value='gain'>Gain Weight</option>
                </select> <br/>

                <input type='submit'/>

                <p>{this.state.results}</p>

            </form>
        )
    }
}