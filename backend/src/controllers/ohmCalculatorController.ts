import { Router, Request, Response } from 'express';
import {
  ResitorColors,
  calculateOhmValue,
  isBandColorValid,
} from '../modules/transistorCalculations';

interface ohmCalculatorParams {
  bandAColor?: string;
  bandBColor?: string;
  bandCColor?: string;
  bandDColor?: string;
}

const ohmCalculator = async (req: Request, res: Response) => {
  const { bandAColor, bandBColor, bandCColor, bandDColor } =
    req.query as ohmCalculatorParams;

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

  res.json({ value: ohmValue });
};

export { ohmCalculator };
