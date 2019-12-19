import React, { PureComponent } from 'react'
import axios from 'axios';

class Fib extends PureComponent {
    state = {
        allSeen: [],
        values: {},
        value: ''
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }

    async fetchValues() {
        const values = (await axios.get('/api/values/current')).data
        this.setState(() => ({
            values
        }))
    }

    async fetchIndexes() {
        const allSeen = (await axios.get('/api/values/all')).data
        this.setState(() => ({
            allSeen
        }))
    }

    onSubmit = async e => {
        e.preventDefault();

        await axios.post('/api/values', {
            index: this.state.value
        });

        this.setState(() => ({
            value: ''
        }))
    }

    onChange = e => {
        const { value } = e.target
        this.setState(() => ({
            value
        }))
    }

    renderSeen = () => this.state.allSeen.map(({ number }) => number).join(', ') || 'N/A'

    renderValues = () => {
        const values = Object.keys(this.state.values).map((key) => (
            <div key={key}>
                Calculated value for index {key} is: {this.state.values[key]}.
            </div>
        ))

        return values.length ? values : 'N/A'
    }

    render = () => (
        <div>
            <form onSubmit={this.onSubmit}>
                <label>Enter your index:</label>
                <br />
                <input value={this.state.value} onChange={this.onChange} />
                <button>Submit</button>
            </form>
            <p>Index I have seen:</p>
            {this.renderSeen()}
            <p>Calculated values:</p>
            {this.renderValues()}
        </div>
    )
}

export default Fib;
