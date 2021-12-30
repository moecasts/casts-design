import { render, screen } from '@testing-library/react';
import { ExampleComponent } from './index';

describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(ExampleComponent).toBeTruthy();
    render(<ExampleComponent text="Example" />);
    expect(screen.getAllByText('Example Component: Example')).toBeTruthy();
  });
});
