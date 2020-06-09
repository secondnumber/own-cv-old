import React from 'react';
import classes from './ToggleButton.module.scss';
import { Link } from 'react-router-dom';

const ToggleButton = (props) => (
  <li className={classes.item}>
    <Link to={props.link}>
      <button className={classes.button}></button>
    </Link>
  </li>
);

export default ToggleButton;
