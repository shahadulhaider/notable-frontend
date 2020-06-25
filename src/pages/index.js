import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import MyNotes from './mynotes';
import Favorite from './favorite';
import Layout from '../components/Layout';

function Pages(props) {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/mynotes' component={MyNotes} />
        <Route path='/favorites' component={Favorite} />
      </Layout>
    </Router>
  );
}

export default Pages;
