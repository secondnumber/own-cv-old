import React from 'react';
import classes from './AboutPage.module.scss';
import ToggleButtons from '../common/ToggleButtons/ToggleButtons';
import Button from '../common/Button/Button';
import Skill from './Skill/Skill';
import Header from '../common/Header/Header';
import Title from '../common/Title/Title';

const AboutPage = (props) => {
  let skillsList = props.about.skills.map((el) => (
    <Skill
      key={el.id}
      name={el.name}
      value={el.value}
      unit={el.unit}
      color={el.color}
    />
  ));
  return (
    <div className={classes.wrapper}>
      <div className={classes.toggles}>
        <ToggleButtons />
      </div>
      <div className={classes.block}>
        <Header />
        <div className={classes.section}>
          <Title text={props.about.title} />
          <h2 className={classes.caption}>{props.about.caption}</h2>
          <p className={classes.description}>
            <span className={classes.turquoise}>&lt;p&gt;</span>
            &nbsp;{props.about.description}&nbsp;
            <span className={classes.turquoise}>&lt;/p&gt;</span>
          </p>
          <Button text={props.about.buttonName} />
        </div>
        <div className={classes.achievements}>{skillsList}</div>
      </div>
    </div>
  );
};

export default AboutPage;
