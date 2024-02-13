import { Request, Response } from 'express';
import { formatApiResponse } from '../modules/responseHelpers';
import {
  bandColor,
  calculateOhmValue,
  isBandColorValid,
} from '../modules/ohmCalculations';
import { CustomError } from '../modules/errorHandling';

interface IOhmCalculatorParams {
  bandAColor?: bandColor;
  bandBColor?: bandColor;
  bandCColor?: bandColor;
  bandDColor?: bandColor;
}

const ohmCalculator = async (req: Request, res: Response) => {
  const { bandAColor, bandBColor, bandCColor, bandDColor } =
    req.query as IOhmCalculatorParams;

  const validParams =
    isBandColorValid(bandAColor) &&
    isBandColorValid(bandBColor) &&
    isBandColorValid(bandCColor) &&
    isBandColorValid(bandDColor);

  if (!validParams) {
    throw new CustomError(
      'Missing band color or band color not acceptable. Remember to send band colors as query parameters with the next format: bandAColor, bandBColor, bandCColor and bandDColor'
    );
  }

  const ohmValue = await calculateOhmValue(
    bandAColor!,
    bandBColor!,
    bandCColor!,
    bandDColor!
  );

  res.json(formatApiResponse(ohmValue));
};

export { ohmCalculator };
