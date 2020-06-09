import React from 'react';
import classes from './Social.module.scss';
import { Link } from 'react-router-dom';

const Social = (props) => (
  <li className={classes.item}>
    <Link to={props.link}>
      <img src={props.image} alt={props.name} />
    </Link>
  </li>
);

export default Social;
