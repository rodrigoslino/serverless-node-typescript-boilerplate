import { APIGatewayProxyHandler } from 'aws-lambda';
import express, { NextFunction, Request, Response } from 'express';
import * as ServerlessHttp from 'serverless-http';
import userController from './handlers/userHandler';
import testController from './handlers/testHandler';
import { ValidationError } from 'express-validation';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use('/user', userController);
app.use('/test', testController);

app.use(function (err, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});

export const mainStartup: APIGatewayProxyHandler = ServerlessHttp(app);
