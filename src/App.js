import React, { Component } from 'react';
import TitlesSection from './sections/TitlesSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import './App.css';
import Navbar from './components/Navbar';
import SnowStorm from './components';
import Footer from './components/Footer';

const RandomColor = () => {
    return (
        '#' +
        Math.random()
            .toString(16)
            .substr(-6)
    );
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundcolor: '#6610f2'
        };
        this.handleChangeColor = this.handleChangeColor.bind(this);
    }
    handleChangeColor() {
        this.setState({
            backgroundcolor: RandomColor()
        });
    }
    render() {
        return (
            <div
                className="App"
                style={{
                    backgroundColor: this.state.backgroundcolor
                }}
            >
                <div className="navigation" />
                <SnowStorm />
                <Navbar backgroundcolor={this.handleChangeColor} />
                <TitlesSection />
                <AboutSection />
                <SkillsSection />
                <Footer /> 
            </div>
        );
    }
}

export default App;
