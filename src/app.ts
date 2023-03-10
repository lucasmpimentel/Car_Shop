import 'express-async-errors';
import express from 'express';
import error from './middlewares/error';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use(error);

export default app;