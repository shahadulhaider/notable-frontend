import React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { GET_NOTE, GET_ME } from '../gql/query';
import { EDIT_NOTE } from '../gql/mutation';
import NoteForm from '../components/NoteForm';

const EditNote = (props) => {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  const { data: userData } = useQuery(GET_ME); // FIXME

  const [editNote] = useMutation(EDIT_NOTE, {
    variables: { id },
    onCompleted: () => {
      props.history.push(`/note/${id}`);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  console.log(userData, data);
  if (userData.me.id !== data.note.author.id) {
    return <p>You do not have access to edit the note</p>;
  }

  return <NoteForm content={data.note.content} action={editNote} />;
};

export default EditNote;
