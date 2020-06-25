import React from 'react';
import classes from './ToggleButtons.module.scss';
import ToggleButton from './ToggleButton/ToggleButton';

const ToggleButtons = (props) => {
  let togglesList = props.menu.menuItems.map((el) => (
    <ToggleButton key={el.id} link={el.link} />
  ));
  return <ul className={classes.list}>{togglesList}</ul>;
};

export default ToggleButtons;
