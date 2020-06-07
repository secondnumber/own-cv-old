import React from 'react';
import classes from './AboutPage.module.scss';
import ToggleButtons from '../common/ToggleButtons/ToggleButtons';
import Button from '../common/Button/Button';
import Skill from './Skill/Skill';
import Header from '../common/Header/Header';
import Title from '../common/Title/Title';

const AboutPage = () => (
  <div className={classes.wrapper}>
    <div className={classes.toggles}>
      <ToggleButtons />
    </div>
    <div className={classes.block}>
      <Header />
      <div className={classes.section}>
        <Title />
        <h2 className={classes.caption}>
          I’m Front-end Developer with 6 years experience
        </h2>
        <p className={classes.description}>
          <span className={classes.turquoise}>&lt;p&gt;</span>
          &nbsp;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.&nbsp;
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
  </div>
);

export default AboutPage;
