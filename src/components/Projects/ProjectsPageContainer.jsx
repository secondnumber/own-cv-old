import React from 'react';
import { connect } from 'react-redux';
import ProjectsPage from './ProjectsPage';

let mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const ProjectsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage);

export default ProjectsPageContainer;
