interface IBandSymbology {
  color: string;
  unit: number | null;
  multiplier: number;
  tolerance: number | null;
}

export const bandSymbology: IBandSymbology[] = [
  {
    color: 'Black',
    unit: 0,
    multiplier: 1,
    tolerance: null,
  },
  {
    color: 'Brown',
    unit: 1,
    multiplier: 10,
    tolerance: 1,
  },
  {
    color: 'Red',
    unit: 2,
    multiplier: 100,
    tolerance: 2,
  },
  {
    color: 'Orange',
    unit: 3,
    multiplier: 1000,
    tolerance: 0.05,
  },
  {
    color: 'Yellow',
    unit: 4,
    multiplier: 10000,
    tolerance: 0.02,
  },
  {
    color: 'Green',
    unit: 5,
    multiplier: 100000,
    tolerance: 0.5,
  },
  {
    color: 'Blue',
    unit: 6,
    multiplier: 1000000,
    tolerance: 0.25,
  },
  {
    color: 'Violet',
    unit: 7,
    multiplier: 10000000,
    tolerance: 0.1,
  },
  {
    color: 'Grey',
    unit: 8,
    multiplier: 100000000,
    tolerance: 0.01,
  },
  {
    color: 'White',
    unit: 9,
    multiplier: 1000000000,
    tolerance: null,
  },
  {
    color: 'Gold',
    unit: null,
    multiplier: 0.1,
    tolerance: 5,
  },
  {
    color: 'Silver',
    unit: null,
    multiplier: 0.01,
    tolerance: 10,
  },
];
