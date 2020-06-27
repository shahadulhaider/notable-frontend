import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Layout from '../components/Layout';
import Home from './home';
import MyNotes from './mynotes';
import Favorite from './favorite';
import Note from './note';
import SignUp from './signup';
import SignIn from './signin';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

function Pages() {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home} />
        <PrivateRoute path='/mynotes' component={MyNotes} />
        <PrivateRoute path='/favorites' component={Favorite} />
        <Route path='/note/:id' component={Note} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
      </Layout>
    </Router>
  );
}

// Private Route Component
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Route
      {...rest}
      render={(props) =>
        data.isLoggedIn === true ? (
          <Componentt {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default Pages;
