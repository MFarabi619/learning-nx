import { render } from '@testing-library/react';

import CartFeature from './cart-feature';

describe('Feature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartFeature />);
    expect(baseElement).toBeTruthy();
  });
});
