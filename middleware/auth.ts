import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!config.requiresAuth) {
    req['user'] = {
      _id: '608f5913b9556635bc1c9835',
      name: 'rodrigo10',
      email: 'r@slino.com.br6'
    };
    return next();
  }

  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.ENV_JWT_PRIVATE_KEY);
    req['user'] = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};
