import React, { Component } from 'react';

const TITLES = [
        'a JavaScript coder',
        'an Internet Marketer',
        'an Infusionsoft administrator',
        'an entrepreneur',
        'a curious thinker',
        'a hopeful dreamer',
        'a loving husband and proud father'
    ]

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({fadeIn: false }), 2000);
        this.animateTitles();
    }
    
    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex, fadeIn: true });

            this.timeout = setTimeout(() => this.setState({fadeIn: false }), 2000);
        }, 4000);
        
    }

    render() {
        const {fadeIn, titleIndex} = this.state;

        const title = TITLES[titleIndex];

        return (
            <div>
                <p className={fadeIn ? 'title-fade-in':'title-fade-out'}>I am {title}</p>
            </div>
        )
    }
}

export default Title;