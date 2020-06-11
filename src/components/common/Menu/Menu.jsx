import React from 'react';
import classes from './Menu.module.scss';
import Burger from '../../../assets/img/burger.svg';
import Close from '../../../assets/img/close.svg';
import Title from '../Title/Title';
import MenuItem from './MenuItem/MenuItem';
import SocialItem from './SocialItem/SocialItem';
import Logo from '../../../assets/img/logo.png';
import { openMenu } from '../../../redux/reducers/menuReducer';
import MenuItemContainer from "./MenuItem/MenuItemContainer";

const Menu = (props) => {
  debugger;
  let menuList = props.menu.menuItems.map((el) => (
    <MenuItemContainer key={el.id} name={el.name} link={el.link} />
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
    <div>
      <div className={classes.header}>
        <img src={Logo} alt="Logo" />
        {props.menu.isClosed ? (
          <button className={classes.button} onClick={props.openMenu}>
            <img src={Burger} alt="Menu Icon" />
          </button>
        ) : (
          <button className={classes.button} onClick={props.closeMenu}>
            <img src={Close} alt="Menu Icon" />
          </button>
        )}
      </div>
      <div className={props.menu.isClosed ? classes.close : classes.menu}>
        <div className={classes.block}>
        <Title text={props.menu.title} />
        <ul className={classes.listMenu}>{menuList}</ul>
        <ul className={classes.listSocial}>{socialList}</ul>
        <p>
          2020 <span className={classes.turquoise}>ANA DOE</span> - All rights
          reserved
        </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
