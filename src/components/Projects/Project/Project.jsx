import React from 'react';
import classes from './Project.module.scss';
import { Link } from 'react-router-dom';

const Project = (props) => (
  <li className={classes.item}>
    <Link to={`/projects/${props.id}`}>
      <img className={classes.image} src={props.image} alt={props.name} />
    </Link>
  </li>
);

export default Project;
