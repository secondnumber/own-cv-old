import React from 'react';
import classes from "./Project.module.scss";
import ProjectImage from '../../../assets/img/project.png'

const Project = (props) =>
    <li className={classes.item}>
        <img className={classes.image} src={ProjectImage} alt="Project"/>
    </li>;

export default Project;
