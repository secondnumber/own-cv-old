import React from 'react';
import classes from './Skill.module.scss';

const Skill = (props) => (
  <div className={classes.wrapper}>
    <div className={classes.label}>
      <span className={classes.caption}>{props.name}</span>
      <span className={classes.caption}>
        {props.value}
        {props.unit}
      </span>
    </div>
    <div className={classes.bg}></div>
    <div className={classes.bar} style={{ width: `${props.value}%`}}></div>
    <progress
      className={classes.progress}
      max="100"
      value={props.value}
    ></progress>
  </div>
);

export default Skill;
