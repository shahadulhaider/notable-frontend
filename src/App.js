import React from 'react';
import { render } from 'react-dom';

import Pages from './pages';
import GlobalStyle from './components/GlobalStyle';

const App = () => (
  <div>
    <GlobalStyle />
    <Pages />
  </div>
);

render(<App />, document.getElementById('root'));
