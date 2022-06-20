import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  xit('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Welcome linq-vault-react/gi)).toBeTruthy();
  });
});
