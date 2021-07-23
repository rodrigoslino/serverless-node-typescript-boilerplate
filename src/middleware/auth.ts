import {NextFunction, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import config from '../config'
import {handleError} from './errorHandler'

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
  if (!token) {
    return res
      .status(401)
      .send(handleError(new Error('Access Denied. No token provided'), 401))
  }
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
    let errorResponse = handleError(ex, 400)
    res
      .status(errorResponse.status)
      .send(JSON.parse(JSON.stringify(errorResponse)))
  }
}
