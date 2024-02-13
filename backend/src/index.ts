import express from 'express';
import { router } from './routes';
import { errorHandlingMiddleware } from './modules/errorHandling';

// SETUP
const app = express();

// ROUTES
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/api', router);

// ERROR HANDLING
app.use(errorHandlingMiddleware);

// INIT SERVER
app.listen(3000);
