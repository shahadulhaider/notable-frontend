import React from 'react';
import { render } from 'react-dom';

import Pages from './pages';

const App = () => (
  <div>
    <Pages />
  </div>
);

render(<App />, document.getElementById('root'));
