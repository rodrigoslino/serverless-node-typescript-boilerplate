import { APIGatewayProxyHandler } from 'aws-lambda';
import bcrypt from 'bcryptjs';
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import * as ServerlessHttp from 'serverless-http';
import 'source-map-support/register';
import { auth } from './middleware/auth';
import { connectToDatabase } from './middleware/connectToDatabase';

//Comment edited

const app = express();
app.use(express.json());

app.post('/user', async (req: Request, res: Response) => {
  const db = await connectToDatabase();
  const collection = db.collection('users');

  let findUser = await collection.findOne({ email: req.body.email });
  if (findUser) return res.status(400).send('User already registered.');

  let newUser = {
    _id: null,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  const data = await collection.insertOne(newUser);

  newUser = data.ops[0];

  const { password, ...resultNewUser } = newUser;

  const token = jwt.sign(resultNewUser, process.env.ENV_JWT_PRIVATE_KEY);
  res.header('x-auth-token', token).send(resultNewUser);
});

app.get('/me', auth, async (req: Request, res: Response) => {
  const db = await connectToDatabase();
  const collection = db.collection('users');

  const data = await collection.findOne({ _id: new ObjectId(req['user']._id) });
  const { password, ...resultData } = data;
  res.send(resultData);
});

app.post('/login', async (req: Request, res: Response) => {
  const db = await connectToDatabase();
  const collection = db.collection('users');

  const user = await collection.findOne({ email: req.body.email });

  if (!user) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) return res.status(400).send('Invalid email or password.');

  const { password, ...userData } = user;
  const token = jwt.sign(userData, process.env.ENV_JWT_PRIVATE_KEY);

  res.status(200).header('x-auth-token', token).json();
});

export const mainHandler: APIGatewayProxyHandler = ServerlessHttp(app);
