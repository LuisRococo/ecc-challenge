import { Router } from 'express';
import { ohmCalculator } from './controllers/ohmCalculatorController';
import { catchAsync } from './modules/errorHandling';

const router = Router();

router.get('/ohm-calculator', catchAsync(ohmCalculator));

export { router };
