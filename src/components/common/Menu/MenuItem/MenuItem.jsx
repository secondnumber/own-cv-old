import React from 'react';
import classes from './MenuItem.module.scss';
import { Link } from 'react-router-dom';

const MenuItem = (props) => (
  <li className={classes.item}>
    <Link className={classes.link} to={props.link}>
      {props.name}
    </Link>
  </li>
);

export default MenuItem;
