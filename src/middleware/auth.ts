import {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!config.requiresAuth) {
    req['user'] = {
      _id: '608f5913b9556635bc1c9835',
      name: 'test',
      email: 'test@test.com',
    }
    return next()
  }

  const token = req.header('x-auth-token')
  if (!token) return res.status(401).send('Access denied. No token provided.')

  try {
    jwt.verify(token, process.env.ENV_JWT_PRIVATE_KEY, function (err, decoded) {
      if (err) {
        throw new Error(err.message)
      } else {
        req['user'] = decoded
        next()
      }
    })
  } catch (ex) {
    res.status(400).send(ex.message)
  }
}
