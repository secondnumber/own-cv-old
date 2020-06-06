import React from 'react';
import classes from "./Tag.module.scss";

const Tag = (props) =>
    <li className={classes.item}>
        {props.text}
    </li>;

export default Tag;
