import React, { useEffect } from 'react';

function MyNotes() {
  useEffect(() => {
    document.title = 'My Notes - Notable';
  });

  return (
    <div>
      <h1>Notable</h1>
      <p>These are my notes</p>
    </div>
  );
}

export default MyNotes;
