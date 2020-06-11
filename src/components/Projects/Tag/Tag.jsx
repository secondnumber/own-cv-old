import React from 'react';
import classes from './Tag.module.scss';

const Tag = (props) => <li className={classes.item}>{props.name}</li>;

export default Tag;
