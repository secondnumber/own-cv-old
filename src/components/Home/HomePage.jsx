import React from 'react';
import classes from './HomePage.module.scss'
import Logo from '../../assets/img/logo.png'
import ToggleButtons from "../common/ToggleButtons/ToggleButtons";

const HomePage = () =>
    <div className={classes.wrapper}>
        <div className={classes.toggles}>
            <ToggleButtons />
        </div>
            <div className={classes.introBlock}>
                <div className={classes.intro}>
                    <img className={classes.logo} src={Logo} alt="Logo"/>
                        <p className={classes.title}>
                            <span className={classes.turquoise}>&lt;title&gt;</span>
                            &nbsp;Hello&nbsp;
                            <span className={classes.turquoise}>&lt;/title&gt;</span>
                        </p>
                        <h1 className={classes.title}>
                            <span className={classes.turquoise}>&lt;h1&gt;</span>
                            &nbsp;I am <span className={classes.bold}>Ana Doe&nbsp;</span>
                            <span className={classes.turquoise}>&lt;/h1&gt;</span>
                        </h1>
                        <p className={classes.subtitle}>
                            <span className={classes.fuchsia}>&lt;h2&gt;</span>
                            &nbsp;A <span className={classes.bold}>HTML5 </span>CODER&nbsp;
                            <span className={classes.fuchsia}>&lt;/h2&gt;</span>
                        </p>
                        <p className={classes.caption}>
                            <span className={classes.turquoise}>&#123;</span>
                            &nbsp;Design & Code&nbsp;
                            <span className={classes.turquoise}>&#125;</span>
                        </p>
                        <p className={classes.attribute}>CLASS =&nbsp;
                            <span className={`${classes.fuchsia} ${classes.bold} ${classes.big}`}>NINJA</span>
                        </p>
                    </div>
                </div>
            <div className={classes.imageBlock}>
            </div>
    </div>;

export default HomePage;
