import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';

import UserForm from '../components/UserForm';
import { SIGNUP_USER } from '../gql/mutation';
import { IS_LOGGED_IN } from '../gql/query';

const SignUp = (props) => {
  useEffect(() => {
    document.title = 'Sign Up - Notable';
  });

  const client = useApolloClient();
  const [signup, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signup);
      client.writeQuery({
        query: IS_LOGGED_IN,
        data: { isLoggedIn: true },
      });
      props.history.push('/');
    },
  });

  return (
    <React.Fragment>
      <UserForm action={signup} formType='signup' />

      {loading && <p>Loading...</p>}
      {error && <p>Error creating ac account!</p>}
    </React.Fragment>
  );
};

export default SignUp;
