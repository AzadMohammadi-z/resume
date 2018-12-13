import React, { Component } from 'react';
import data from '../data.json';
import { SocialIcon } from 'react-social-icons';
import Fullpage from '../components/Fullpage';
import './TitlesSection.css';
import DownIcon from '../components/DownIcon.js';
import { Link, Element } from 'react-scroll';

const RandomColor = () => {
    return (
        '#' +
        Math.random()
            .toString(16)
            .substr(-6)
    );
};

class TitlesSection extends Component {
    constructor() {
        super();
        this.state = {
            color: 'white'
        };
        this.handlechangeColor = this.handlechangeColor.bind(this);
    }
    handlechangeColor() {
        this.setState({
            color: RandomColor()
        });
    }
    render() {
        return (
            <div>
                <Fullpage className="first">
                    <div>
                        <img className="myimg" src={data.image} />
                    </div>

                    <h1
                        className="title"
                        style={{
                            color: this.state.color
                        }}
                        onClick={this.handlechangeColor}
                    >
                        {data.title}
                    </h1>
                    <div>
                        <h3>{data.subtitle}</h3>
                    </div>

                    <div className="icons-wrapper">
                        {Object.keys(data.links).map(key => {
                            return (
                                <div className="icon">
                                    <SocialIcon url={data.links[key]} />
                                </div>
                            );
                        })}
                    </div>
                </Fullpage>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '-34px',
                        transform: 'translateY(-75px)'
                    }}
                >
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={0}
                    >
                        <div
                            style={{
                                maxWidth: '30px'
                            }}
                        >
                            <DownIcon icon={data.icons.down} />
                        </div>
                    </Link>
                    <Element name="about" className="element" />
                </div>
            </div>
        );
    }
}

export default TitlesSection;
