import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_MY_FAVORITES } from '../gql/query';
import NoteFeed from '../components/NoteFeed';

const Favorite = () => {
  useEffect(() => {
    document.title = 'Favorites - Notable';
  });

  const { loading, error, data } = useQuery(GET_MY_FAVORITES);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error ${error.message}`;

  if (data.me.favorites.lenth !== 0) {
    return <NoteFeed notes={data.me.favorites} />;
  } else {
    return <p>No favorites yet!</p>;
  }
};

export default Favorite;
