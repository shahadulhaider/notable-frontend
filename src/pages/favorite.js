import React, { useEffect } from 'react';

function Favorite() {
  useEffect(() => {
    document.title = 'Favorites - Notable';
  });
  return (
    <div>
      <p>These are my favorite notes.</p>
    </div>
  );
}

export default Favorite;
