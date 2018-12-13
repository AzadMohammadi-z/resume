import React, { Component } from 'react';
import './Footer.css';
import DownIcon from '../components/DownIcon.js';
import data from '../data.json';

class Footer extends Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(
            this.scrollStep.bind(this),
            this.props.delayInMs
        );
        this.setState({ intervalId: intervalId });
    }
    render() {
        return (
            <div
                style={{
                    position: 'fixed',
                    float: 'right',
                    width: '100%'
                }}
            >
                <a
                    style={{
                        float: 'right'
                    }}
                    title="Back to top"
                    className="scroll"
                    onClick={() => {
                        this.scrollToTop();
                    }}
                >
                    <DownIcon icon={data.icons.top} />
                </a>
            </div>
        );
    }
}

export default Footer;
