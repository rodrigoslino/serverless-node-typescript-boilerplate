import { APIGatewayProxyHandler } from 'aws-lambda';
import express from 'express';
import * as ServerlessHttp from 'serverless-http';
import 'source-map-support/register';
import userController from './handlers/userHandler';
import testController from './handlers/testHandler';

const app = express();
app.use(express.json());
app.use('/user', userController);
app.use('/test', testController);

export const mainStartup: APIGatewayProxyHandler = ServerlessHttp(app);
