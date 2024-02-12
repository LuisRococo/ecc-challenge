export interface ITransistorColorCode {
  color: string;
  digit?: number;
  multiplier: number;
  tolerance?: number;
}

export const transistorColorCodes: ITransistorColorCode[] = [
  {
    color: 'black',
    digit: 0,
    multiplier: 1,
    tolerance: undefined,
  },
  {
    color: 'brown',
    digit: 1,
    multiplier: 10,
    tolerance: 1,
  },
  {
    color: 'red',
    digit: 2,
    multiplier: 100,
    tolerance: 2,
  },
  {
    color: 'orange',
    digit: 3,
    multiplier: 1000,
    tolerance: 0.05,
  },
  {
    color: 'yellow',
    digit: 4,
    multiplier: 10000,
    tolerance: 0.02,
  },
  {
    color: 'green',
    digit: 5,
    multiplier: 100000,
    tolerance: 0.5,
  },
  {
    color: 'blue',
    digit: 6,
    multiplier: 1000000,
    tolerance: 0.25,
  },
  {
    color: 'violet',
    digit: 7,
    multiplier: 10000000,
    tolerance: 0.1,
  },
  {
    color: 'grey',
    digit: 8,
    multiplier: 100000000,
    tolerance: 0.01,
  },
  {
    color: 'white',
    digit: 9,
    multiplier: 1000000000,
    tolerance: undefined,
  },
  {
    color: 'gold',
    digit: undefined,
    multiplier: 0.1,
    tolerance: 5,
  },
  {
    color: 'silver',
    digit: undefined,
    multiplier: 0.01,
    tolerance: 10,
  },
];
