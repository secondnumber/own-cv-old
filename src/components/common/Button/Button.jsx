import React from 'react';
import classes from './Button.module.scss'

const Button = (props) =>
    <button className={classes.button}>{props.text}</button>;

export default Button;
