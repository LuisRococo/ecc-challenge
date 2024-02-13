import {
  calculateOhmValue,
  joinFirstTwoBandDigits,
  isBandColorValid,
} from '../src/modules/ohmCalculations';

describe('calculateOhmValue', () => {
  test('returns ohm value with valid data', async () => {
    let result = await calculateOhmValue('red', 'blue', 'orange', 'gold');
    expect(result?.ohmValue).toBe(26000);

    result = await calculateOhmValue('green', 'white', 'red', 'gold');
    expect(result?.ohmValue).toBe(5900);

    result = await calculateOhmValue('violet', 'red', 'blue', 'silver');
    expect(result?.ohmValue).toBe(72000000);
  });

  test('returns null on failure or NaN result', async () => {
    const result = await calculateOhmValue('gold', 'red', 'red', 'red');
    expect(result).toBe(null);
  });
});

describe('isBandColorValid', () => {
  test('returns true if color string is valid', () => {
    expect(isBandColorValid('black')).toBe(true);
  });

  test('returns false if color string is not valid', () => {
    const value = 'horse';
    expect(isBandColorValid(value)).toBe(false);
  });
});

describe('joinFirstTwoBandDigits', () => {
  test('joins two int values into one', () => {
    const result = joinFirstTwoBandDigits(20, 24);
    expect(result).toBe(2024);
  });
});
