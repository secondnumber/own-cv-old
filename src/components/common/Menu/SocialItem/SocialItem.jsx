import React from 'react';
import classes from './SocialItem.module.scss';
import { Link } from 'react-router-dom';

const SocialItem = (props) => (
  <li className={classes.item}>
    <Link activeClassName={classes.link} to={props.link}>
      <img src={props.image} alt={props.name} />
    </Link>
  </li>
);

export default SocialItem;
