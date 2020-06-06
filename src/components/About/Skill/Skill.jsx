import React from 'react';
import classes from './Skill.module.scss'

const Skill = () =>
    <div className={classes.wrapper}>
        <div className={classes.label}>
            <span className={classes.caption}>HTML</span>
            <span className={classes.caption}>90%</span>
        </div>
        <div className={classes.bg}></div>
        <div className={classes.bar}></div>
        <progress className={classes.progress} max="100" value="90">
        </progress>
    </div>;

export default Skill;
