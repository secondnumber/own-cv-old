import React from 'react';
import classes from './HomePage.module.scss';
import Header from '../common/Header/Header';
import ToggleButtonsContainer from '../common/ToggleButtons/ToggleButtonsContainer';
import MenuContainer from '../common/Menu/MenuContainer';

const HomePage = () => (
  <div className={classes.wrapper}>
    <MenuContainer />
    <div className={classes.toggles}>
      <ToggleButtonsContainer />
    </div>
    <div className={classes.bg}></div>
    <div className={classes.block}>
      <Header />
      <div className={classes.intro}>
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
        <p className={classes.attribute}>
          CLASS =&nbsp;
          <span className={`${classes.fuchsia} ${classes.bold} ${classes.big}`}>
            NINJA
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default HomePage;
