import React from 'react';
import classes from './AboutPage.module.scss'
import Logo from '../../assets/img/logo.png'
import ToggleButtons from "../common/ToggleButtons/ToggleButtons";
import Button from "../common/Button/Button";

const AboutPage = () =>
    <div className={classes.wrapper}>
        <div className={classes.toggles}>
            <ToggleButtons />
        </div>
        <div className={classes.block}>
            <div className={classes.logo}>
                <img className={classes.logo} src={Logo} alt="Logo"/>
            </div>
            <h1>
                <span className={classes.turquoise}>&#123;</span>
                &nbsp;About Me&nbsp;
                <span className={classes.turquoise}>&#125;</span>
            </h1>
            <h2 className={classes.caption}>I’m Front-end Developer with
                6 years experience</h2>
            <p className={classes.description}>
                &lt;p&gt; Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. &lt;/p&gt;
            </p>
            <Button />
            <div className={classes.achievements}>

            </div>
        </div>
    </div>;

export default AboutPage;
