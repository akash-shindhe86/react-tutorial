import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { axe, toHaveNoViolations } from '@axe-core/react';

expect.extend(toHaveNoViolations);

test('should have no ADA violations', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});