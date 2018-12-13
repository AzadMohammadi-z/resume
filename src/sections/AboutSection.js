import React, { Component } from 'react';
import data from '../data.json';
import Fullpage from '../components/Fullpage';
import './AboutSection.css';
import DownIcon from '../components/DownIcon.js';
import { Link, Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buttton } from 'reactstrap';

class AboutSection extends Component {
    render() {
        return (
            <div>
                <Fullpage className="second">
                    <div className="titleabout">
                        <h1>{data.sections[0].title}</h1>
                    </div>
                    <div class="mb-0">
                        {data.sections[0].items.map(p => {
                            return (
                                <div className="moreabout">
                                    <div class="col">
                                        <p>{p.content}</p>
                                        <p>{p.content1}</p>
                                        <p>{p.content2}</p>
                                        <p>{p.content3}</p>
                                        <p>{p.content4}</p>
                                    </div>
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
                        transform: 'translateY(-90px)'
                    }}
                >
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={500}
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
                    <Element name="skills" className="element" />
                </div>
            </div>
        );
    }
}

export default AboutSection;
