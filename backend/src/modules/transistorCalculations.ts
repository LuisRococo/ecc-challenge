import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export enum ResitorColors {
  Black = 'black',
  brown = 'Brown',
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Green = 'green',
  Blue = 'blue',
  Violet = 'violet',
  grey = 'grey',
  White = 'white',
  Gold = 'gold',
  Silver = 'silver',
}

export const isBandColorValid = (bandColor?: string) => {
  return bandColor != undefined && bandColor in ResitorColors;
};

export const calculateOhmValue = async (
  bandAColor: string,
  bandBColor: string,
  bandCColor: string,
  bandDColor: string
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

  const resistorDigits = parseInt(
    `${bandAColorData!.digit}${bandBColorData!.digit}`
  );
  const ohmValue = resistorDigits * bandCColorData!.multiplier.toNumber();

  return ohmValue;
};
