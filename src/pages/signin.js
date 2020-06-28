import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';

import UserForm from '../components/UserForm';
import { SIGNIN_USER } from '../gql/mutation';
import { IS_LOGGED_IN } from '../gql/query';

const SignIn = (props) => {
  useEffect(() => {
    document.title = 'Sign In - Notable';
  });

  const client = useApolloClient();
  const [signin, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signin);
      client.writeQuery({
        query: IS_LOGGED_IN,
        data: { isLoggedIn: true },
      });
      props.history.push('/');
    },
  });

  return (
    <React.Fragment>
      <UserForm action={signin} formType='signin' />

      {loading && <p>Loading...</p>}
      {error && <p>Error singing in!</p>}
    </React.Fragment>
  );
};

export default SignIn;
