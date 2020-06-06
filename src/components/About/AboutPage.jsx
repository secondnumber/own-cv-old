import React from 'react';
import classes from './AboutPage.module.scss'
import Logo from '../../assets/img/logo.png'
import ToggleButtons from "../common/ToggleButtons/ToggleButtons";
import Button from "../common/Button/Button";
import Skill from "./Skill/Skill";

const AboutPage = () =>
    <div className={classes.wrapper}>
        <div className={classes.toggles}>
            <ToggleButtons />
        </div>
        <div className={classes.block}>
            <div className={classes.header}>
                <img src={Logo} alt="Logo"/>
            </div>
            <div className={classes.section}>
            <h1 className={classes.title}>
                <span className={classes.turquoise}>&#123;</span>
                &nbsp;About Me&nbsp;
                <span className={classes.turquoise}>&#125;</span>
            </h1>
            <h2 className={classes.caption}>I’m Front-end Developer with
                6 years experience</h2>
            <p className={classes.description}>
                <span className={classes.turquoise}>&lt;p&gt;</span>
                &nbsp;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.&nbsp;
                <span className={classes.turquoise}>&lt;/p&gt;</span>
            </p>
            <Button text={'Download Resume'} />
            </div>
            <div className={classes.achievements}>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </div>
    </div>;

export default AboutPage;
