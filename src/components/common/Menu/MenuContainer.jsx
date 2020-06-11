import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import { closeMenu, openMenu } from '../../../redux/reducers/menuReducer';

let mapStateToProps = (state) => {
  return {
    menu: state.menu,
    social: state.social,
  };
};

const MenuContainer = connect(mapStateToProps, { closeMenu, openMenu })(Menu);

export default MenuContainer;
