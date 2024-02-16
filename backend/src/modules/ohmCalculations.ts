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

export const joinFirstTwoBandDigits = (
  bandADigit: number,
  bandBDigit: number
) => {
  return parseInt(`${bandADigit}${bandBDigit}`);
};

export const isBandColorValid = (bandColorToCheck?: string) => {
  return (
    bandColorToCheck != undefined && validBandColors.includes(bandColorToCheck)
  );
};

export const calculateOhmValue = async (
  bandAColor: bandColor,
  bandBColor: bandColor,
  bandCColor: bandColor,
  bandDColor: bandColor
) => {
  try {
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

    await prisma.$disconnect();

    const resistorDigits = joinFirstTwoBandDigits(
      bandAColorData!.digit!,
      bandBColorData!.digit!
    );

    const ohmValue = resistorDigits * bandCColorData!.multiplier.toNumber();

    if (isNaN(ohmValue)) {
      return null;
    }

    return { ohmValue, tolerance: bandDColorData?.tolerance };
  } catch (error) {
    return null;
  }
};
