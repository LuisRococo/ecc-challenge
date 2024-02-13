import {
  calculateOhmValue,
  joinFirstTwoBandDigits,
  isBandColorValid,
} from '../src/modules/ohmCalculations';

describe('calculateOhmValue', () => {
  test('returns ohm value with valid data', async () => {
    let ohmValue = await calculateOhmValue('red', 'blue', 'orange', 'gold');
    expect(ohmValue).toBe(26000);

    ohmValue = await calculateOhmValue('green', 'white', 'red', 'gold');
    expect(ohmValue).toBe(5900);

    ohmValue = await calculateOhmValue('violet', 'red', 'blue', 'silver');
    expect(ohmValue).toBe(72000000);
  });

  test('returns null on failure or NaN result', async () => {
    const ohmValue = await calculateOhmValue('gold', 'red', 'red', 'red');
    expect(ohmValue).toBe(null);
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
