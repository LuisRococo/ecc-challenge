import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const validBandColors = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
  'gold',
  'silver',
];

export type bandColor =
  | 'black'
  | 'brown'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'violet'
  | 'grey'
  | 'white'
  | 'gold'
  | 'silver';

const combineFirstTwoBandDigits = (bandADigit: number, bandBDigit: number) => {
  return parseInt(`${bandADigit}${bandBDigit}`);
};

export const isBandColorValid = (bandColorToCheck?: bandColor) => {
  return (
    bandColorToCheck != undefined && validBandColors.includes(bandColorToCheck)
  );
};

export const calculateOhmValue = async (
  bandAColor: bandColor,
  bandBColor: bandColor,
  bandCColor: bandColor,
  bandDColor: bandColor
): Promise<number> => {
  const bandAColorData = await prisma.resistorColorCode.findFirst({
    where: { color: bandAColor },
  });
  const bandBColorData = await prisma.resistorColorCode.findFirst({
    where: { color: bandBColor },
  });
  const bandCColorData = await prisma.resistorColorCode.findFirst({
    where: { color: bandCColor },
  });
  const bandDColorData = await prisma.resistorColorCode.findFirst({
    where: { color: bandDColor },
  });

  // Calculations

  const resistorDigits = combineFirstTwoBandDigits(
    bandAColorData!.digit!,
    bandBColorData!.digit!
  );
  const ohmValue = resistorDigits * bandCColorData!.multiplier.toNumber();

  return ohmValue;
};
