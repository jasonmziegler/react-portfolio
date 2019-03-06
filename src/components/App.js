import React, { Component } from 'react';
import Project from './Projects';
import Socials from './Socials';
import profilePic from '../assets/profile.jpg';
import Title from './Title';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Jokes from './Jokes';

class App extends Component {
    state = {
        displayBio: false
    };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio})
    }
    render() {
        
        return (
            <div>
                <img src={profilePic} alt="Jason Ziegler" className="proflePic"/>
                <h1>Hello!</h1>
                <p> My name is Jason</p>
                <Title />
                <p> I am always interested in working on new projects. </p>
                {
                    this.state.displayBio ? (
                    <div>
                        <Alert variant='info'>
                        <p>I live in New Braunfels, and code every day.</p>
                        <p>My favorite language is Javascript, and I think React.js is awesome.</p>

                        <p>Besides coding, I love spending time with my wife and two beautiful children.</p>
                        </Alert>
                        <Button onClick={this.toggleDisplayBio}>Show Less</Button>
                    </div>
                    
                    ) : (<Button onClick={this.toggleDisplayBio}>Read More</Button>)
                }
                <hr/>
                <Project />
                <hr/>
                <Socials />
                <hr/>
                <Jokes />
            </div>
        )
    }
}

export default App;