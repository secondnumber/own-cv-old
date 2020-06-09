import React from 'react';
import classes from './Social.module.scss';
import FacebookImg from '../../../assets/img/facebook.png';

const Social = (props) => (
  <li className={classes.item}>
    <img src={props.image} alt="SocialIcon" />
  </li>
);

export default Social;
