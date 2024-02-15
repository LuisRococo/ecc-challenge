import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

const headerElem = <Header />;

describe('Header', () => {
  it('Renders component correctly', () => {
    render(headerElem);

    const header = screen.getByTestId('header');
    expect(header).not.toBe(null);
  });

  it('Renders page title correctly', () => {
    render(headerElem);

    const headerTitle = screen.getByTestId('header-title');
    expect(headerTitle).not.toBe(null);
    expect(headerTitle.textContent).toBe('OHM CALCULATOR');
  });
});
