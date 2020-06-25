import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import MyNotes from './mynotes';
import Favorite from './favorite';

function Pages(props) {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/mynotes' component={MyNotes} />
      <Route path='/favorites' component={Favorite} />
    </Router>
  );
}

export default Pages;
