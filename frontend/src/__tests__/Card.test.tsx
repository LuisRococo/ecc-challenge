import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';

const cardElement = (
  <Card title="Card">
    <p data-testid="content">Card content</p>
  </Card>
);

describe('Card', () => {
  it('Renders component correctly', () => {
    render(cardElement);

    const cardElem = screen.getByTestId('card');
    expect(cardElem).not.toBe(null);
  });

  it('Renders title correctly', () => {
    render(cardElement);

    const titleElem = screen.getByTestId('card-title');
    expect(titleElem).not.toBe(null);
    expect(titleElem.textContent).toBe('Card');
  });

  it('Renders content correctly', () => {
    render(cardElement);

    const contentElem = screen.getByTestId('content');
    expect(contentElem).not.toBe(null);
  });
});
