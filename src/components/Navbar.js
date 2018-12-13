import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import './Navbar.css';

class Navbar extends Component {
    ch = () => {
        this.props.backgroundcolor();
    };
    render() {
        console.log(this.props);
        return (
            <div
                style={{
                    position: 'fixed',
                    top: 10,
                    width: '100%'
                }}
            >
                <a className="a1" onClick={this.ch}>
                    Color Me
                </a>

                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={500}
                    duration={500}
                    delay={0}
                >
                    <a className="a2">Skills</a>
                </Link>

                <Element name="skills" className="element" />

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    delay={0}
                >
                    <a className="a3">About</a>
                </Link>

                <Element name="about" className="element" />
            </div>
        );
    }
}

export default Navbar;
