import React, { useEffect } from 'react';
import { useMutation, gql, useApolloClient } from '@apollo/client';
import UserForm from '../components/UserForm';

const SIGNIN_USER = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password)
  }
`;

const SignIn = (props) => {
  useEffect(() => {
    document.title = 'Sign In - Notable';
  });

  const client = useApolloClient();
  const [signin, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signin);
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
      <UserForm action={signin} formType='signin' />

      {loading && <p>Loading...</p>}
      {error && <p>Error singing in!</p>}
    </React.Fragment>
  );
};

export default SignIn;
