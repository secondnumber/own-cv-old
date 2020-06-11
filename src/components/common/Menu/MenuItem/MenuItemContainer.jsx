import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import { closeMenu } from '../../../../redux/reducers/menuReducer';

let mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

const MenuContainer = connect(mapStateToProps, { closeMenu })(MenuItem);

export default MenuContainer;
