import React from 'react';
import classes from './Menu.module.scss';
import Close from '../../../assets/img/close.svg';
import Title from '../Title/Title';
import MenuItem from './MenuItem/MenuItem';
import SocialItem from './SocialItem/SocialItem';

const Menu = (props) => {
  let menuList = props.menu.menuItems.map((el) => (
    <MenuItem key={el.id} name={el.name} link={el.link} />
  ));

  let socialList = props.social.socialItems.map((el) => (
    <SocialItem
      key={el.id}
      name={el.name}
      link={el.link}
      image={el.imageWhite}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.block}>
        <div className={classes.header}>
          <img src={Close} alt="Close Icon" />
        </div>
        <Title text={props.menu.title} />
        <ul className={classes.listMenu}>{menuList}</ul>
        <ul className={classes.listSocial}>{socialList}</ul>
        <p className={classes.copyright}>
          2020 <span className={classes.turquoise}>ANA DOE</span> - All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Menu;
