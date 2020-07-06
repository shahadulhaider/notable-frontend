import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    padding-left: 0.7em;
    margin-bottom: 1em;
  }

  p {
    margin-top: 3em;
    text-align: center;
  }
`;

const UserForm = (props) => {
  const [values, setValues] = useState();

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Wrapper>
      {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}

      <Form
        onSubmit={(event) => {
          event.preventDefault();
          props.action({
            variables: {
              ...values,
            },
          });
        }}>
        {props.formType === 'signup' && (
          <React.Fragment>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              required
              id='username'
              name='username'
              placeholder='Username'
              onChange={onChange}
            />
          </React.Fragment>
        )}
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          required
          id='email'
          name='email'
          placeholder='Email'
          onChange={onChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          required
          id='password'
          name='password'
          placeholder='Password'
          onChange={onChange}
        />
        {props.formType === 'signup' ? (
          <React.Fragment>
            <p>
              Already have an account? <Link to={'/signin'}>Sign In</Link>
            </p>
            <Button type='submit'>Sign Up</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>
              Don&apos;t have an account? <Link to={'/signup'}>Create one</Link>
            </p>
            <Button type='submit'>Sign In</Button>
          </React.Fragment>
        )}
      </Form>
    </Wrapper>
  );
};

export default UserForm;
