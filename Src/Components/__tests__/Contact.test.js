import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('contact us page test cases', () => {
  it('Should load contact us page', () => {
    render(<Contact />);

    const heading = screen.getByRole('heading');

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it('Should load button inside contact component', () => {
    render(<Contact />);
    const button = screen.getByText('Submit');

    expect(button).toBeInTheDocument();
  });

  it('Should load All inputBoxes on contact component', () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole('textbox');

    expect(inputBoxes.length).toBe(2);
  });
});
