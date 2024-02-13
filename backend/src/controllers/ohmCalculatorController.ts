import { Request, Response } from 'express';
import { formatApiResponse } from '../modules/responseHelpers';
import { bandColor, calculateOhmValue } from '../modules/ohmCalculations';

interface IOhmCalculatorParams {
  bandAColor?: bandColor;
  bandBColor?: bandColor;
  bandCColor?: bandColor;
  bandDColor?: bandColor;
}

const ohmCalculator = async (req: Request, res: Response) => {
  const { bandAColor, bandBColor, bandCColor, bandDColor } =
    req.query as IOhmCalculatorParams;

  // TODO: CREATE ERROR HANDLING FOR PARAMS
  // const validParams =
  //   isBandColorValid(bandAColor) &&
  //   isBandColorValid(bandBColor) &&
  //   isBandColorValid(bandCColor) &&
  //   isBandColorValid(bandDColor);

  const ohmValue = await calculateOhmValue(
    bandAColor!,
    bandBColor!,
    bandCColor!,
    bandDColor!
  );

  res.json(formatApiResponse(ohmValue));
};

export { ohmCalculator };
