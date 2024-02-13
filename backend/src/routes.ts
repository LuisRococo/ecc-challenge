import { Router } from 'express';
import { ohmCalculator } from './controllers/ohmCalculatorController';

const router = Router();

router.get('/ohm-calculator', ohmCalculator);

export { router };
