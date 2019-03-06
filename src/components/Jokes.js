import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke: json }));
    }
    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_10')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json }));
    }
    getNewJoke = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke: json }))
        .catch(error => console.log('error', error));
    }

    render() {
        const { setup, punchline } = this.state.joke;

        return (
            <div>
                <h2>Highlighted Joke</h2>
                {setup} <em>{punchline}</em>
                <br />
                <Button onClick={this.getNewJoke}>Get New Joke</Button>
            </div>
        )
    }
}

export default Jokes;