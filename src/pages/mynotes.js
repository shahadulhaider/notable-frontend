import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_MY_NOTES } from '../gql/query';
import NoteFeed from '../components/NoteFeed';

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My Notes - Notable';
  });

  const { loading, error, data } = useQuery(GET_MY_NOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error: ${error.message}`;

  if (data.me.notes.length !== 0) {
    return <NoteFeed notes={data.me.notes} />;
  } else {
    return <p>No notes yet!</p>;
  }
};

export default MyNotes;
