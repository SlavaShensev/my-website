import React from "react";
import style from './skill.module.css'

type SkillComponentTypeProps = {
    title: string
    description: string
}

const Skill: React.FC<SkillComponentTypeProps> = ({title, description}) => {
    return (
        <div className={style.skill}>

            <div className={style.icon}>

            </div>

            <h3>{title}</h3>

            <span className={style.description}>
                {description}
            </span>

        </div>
    )
}

export default Skill