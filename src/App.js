import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import AboutPageContainer from './components/About/AboutPageContainer';
import ContactsPageContainer from './components/Contacts/ContactsPageContainer';
import ProjectsPageContainer from './components/Projects/ProjectsPageContainer';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPageContainer />
      </Route>
      <Route path="/projects">
        <ProjectsPageContainer />
      </Route>
      <Route path="/contacts">
        <ContactsPageContainer />
      </Route>
    </Switch>
  </Router>
);

export default App;
