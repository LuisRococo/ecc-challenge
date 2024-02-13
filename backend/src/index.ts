import express from 'express';
import { router } from './routes';

// SETUP
const app = express();

// ROUTES
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/api', router);

// INIT SERVER
app.listen(3000);
