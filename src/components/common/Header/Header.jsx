import React from 'react';
import classes from './Header.module.scss';
import Logo from "../../../assets/img/logo.png";
import Burger from "../../../assets/img/menu.svg";

const Header = (props) =>
    <div className={classes.header}>
        <img src={Logo} alt="Logo"/>
        <img src={Burger} alt="Menu Icon"/>
    </div>

export default Header;
