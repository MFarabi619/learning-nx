import { render } from '@testing-library/react';

import Books from './Books';

describe('Books', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Books />);
    expect(baseElement).toBeTruthy();
  });
});
