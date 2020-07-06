import React from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';
import ButtonLink from './ButtonLink';

const DeleteNote = (props) => {
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId,
    },
    refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
    onCompleted: () => {
      props.history.push('/mynotes');
    },
  });

  return <ButtonLink onClick={deleteNote}>Delete Note</ButtonLink>;
};

export default withRouter(DeleteNote);
