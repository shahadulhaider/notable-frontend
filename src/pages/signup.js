import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/UserForm';

const SIGNUP_USER = gql`
  mutation signup($email: String!, $username: String!, $password: String!) {
    signup(email: $email, username: $username, password: $password)
  }
`;

const SignUp = (props) => {
  useEffect(() => {
    document.title = 'Sign Up - Notable';
  });

  const client = useApolloClient();
  const [signup, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signup);
      client.writeQuery({
        query: gql`
          {
            isLoggedIn @client
          }
        `,
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
