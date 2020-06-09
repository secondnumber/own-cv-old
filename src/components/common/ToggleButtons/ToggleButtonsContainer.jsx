import React from 'react';
import { connect } from 'react-redux';
import ToggleButtons from './ToggleButtons';

let mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const ToggleButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleButtons);

export default ToggleButtonsContainer;
