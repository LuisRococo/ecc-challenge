import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer';

const footerElem = <Footer />;

describe('Footer', () => {
  it('Renders component correctly', () => {
    render(footerElem);

    const footer = screen.getByTestId('footer');
    expect(footer).not.toBe(null);
  });
});
