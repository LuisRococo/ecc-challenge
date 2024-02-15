import { render, screen } from '@testing-library/react';
import CBandInput from '../components/CBandInput/CBandInput';

const bandInputElem = (
  <CBandInput
    bandName="colorBandC"
    colors={['yellow']}
    currentColor="yellow"
    number={1}
    onColorChange={() => {}}
  />
);

describe('Color Band Input', () => {
  it('Renders component correctly', () => {
    render(bandInputElem);

    const bandElem = screen.getByTestId('band-input');
    expect(bandElem).not.toBe(null);
  });

  it('Renders band number correctly', () => {
    render(bandInputElem);

    const bandNumberLabel = screen.getByTestId('band-number');
    expect(bandNumberLabel).not.toBe(null);
    expect(bandNumberLabel.textContent).toBe('1° Color band');
  });
});
