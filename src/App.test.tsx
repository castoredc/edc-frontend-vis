import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

test('should render without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
