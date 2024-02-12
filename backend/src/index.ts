import express from 'express';
import {
  ResitorColors,
  calculateOhmValue,
} from './modules/transistorCalculations';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);

// TEST AREA

calculateOhmValue(
  ResitorColors.Blue,
  ResitorColors.Yellow,
  ResitorColors.Blue,
  ResitorColors.Blue
);
