import React from 'react';
import classes from './ToggleButtons.module.scss';
import { Link } from 'react-router-dom';

const ToggleButtons = () => (
  <ul className={classes.list}>
    <li className={classes.item}>
      <Link to="/">
        <button className={classes.button}></button>
      </Link>
    </li>
    <li className={classes.item}>
      <Link to="/about">
        <button className={classes.button}></button>
      </Link>
    </li>
    <li className={classes.item}>
      <Link to="/projects">
        <button className={classes.button}></button>
      </Link>
    </li>
    <li className={classes.item}>
      <Link to="/contacts">
        <button className={classes.button}></button>
      </Link>
    </li>
  </ul>
);

export default ToggleButtons;
