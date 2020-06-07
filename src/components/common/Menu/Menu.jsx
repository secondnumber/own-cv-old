import React from 'react';
import classes from './Menu.module.scss';
import FacebookIcon from '../../../assets/img/facebook.svg';
import Logo from "../../../assets/img/logo.png";
import Close from "../../../assets/img/close.svg";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

const Menu = (props) =>
    <div className={classes.wrapper}>
        <div className={classes.block}>
            <div className={classes.header}>
                <img src={Close} alt="Close Icon"/>
            </div>
            <Title />
        <ul className={classes.listMenu}>
            <li className={classes.item}><Link className={classes.link} to='/'>Home</Link></li>
            <li className={classes.item}><Link className={classes.link} to='/about'>About me</Link></li>
            <li className={classes.item}><Link className={classes.link} to='/projects'>My projects</Link></li>
            <li className={classes.item}><Link className={classes.link} to='/contacts'>Contact me</Link></li>
        </ul>
        <ul className={classes.listSocial}>
            <li className={classes.item}>
                <img className={classes.icon} src={FacebookIcon} alt="Facebook"/>
            </li>
            <li className={classes.item}>
                <img className={classes.icon} src={FacebookIcon} alt="Facebook"/>
            </li>
            <li className={classes.item}>
                <img className={classes.icon} src={FacebookIcon} alt="Facebook"/>
            </li>
            <li className={classes.item}>
                <img className={classes.icon} src={FacebookIcon} alt="Facebook"/>
            </li>
            <li className={classes.item}>
                <img className={classes.icon} src={FacebookIcon} alt="Facebook"/>
            </li>
        </ul>
            <p className={classes.copyright}>2020 <span className={classes.turquoise}>ANA DOE</span> - All rights reserved</p>
        </div>
    </div>

export default Menu;
