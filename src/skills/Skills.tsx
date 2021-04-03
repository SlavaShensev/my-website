import React from 'react';
import style from './skills.module.css';
import styleContainer from '../common/styles/container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>
                    Skills
                </h2>
                <div className={style.skills}>
                    <Skill title={'HTML'} description={text}/>
                    <Skill title={'HTML'} description={text}/>
                    <Skill title={'HTML'} description={text}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;


const text = ' Lorem ipsum dolor sit amet,\n' +
    '    consectetur adipisicing elit,\n' +
    '    sed do eiusmod tempor incididunt\n' +
    'ut labore et dolore magna aliqua Ut enim...'