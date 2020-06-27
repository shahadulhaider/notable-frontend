import React, { useEffect } from 'react';
import Button from '../components/Button';

function MyNotes() {
  useEffect(() => {
    document.title = 'My Notes - Notable';
  });

  return (
    <div>
      <p>These are my notes</p>
      <Button>Click me!</Button>
    </div>
  );
}

export default MyNotes;
