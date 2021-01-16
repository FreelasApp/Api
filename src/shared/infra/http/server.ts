import express from 'express';
import 'reflect-metadata';
import '../typeorm';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import logsMiddleware from './middlewares/logs';
import errorsParserMiddleware from './middlewares/errorsParserMiddleware';
import '../../container';

const app = express();
app.use(express.json());
app.use(cors());
app.use(logsMiddleware);

app.use(routes);

app.use(errorsParserMiddleware);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`🚀 server started in http://localhost:${PORT}`);
});
