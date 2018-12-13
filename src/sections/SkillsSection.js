import React, { Component } from 'react';
import data from '../data.json';
import Fullpage from '../components/Fullpage';
import SkillCard from './../components/SkillCard';
import './SkillsSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class SkillsSection extends Component {
    render() {
        return (
            <Fullpage className="third">
                <div className="titleskill">
                    <h1>{data.sections[1].title}</h1>
                </div>

                <div className="cards-wrapper">
                    {data.sections[1].items.map(eachskill => {
                        return <SkillCard skill={eachskill} />;
                    })}
                </div>
            </Fullpage>
        );
    }
}

export default SkillsSection;
