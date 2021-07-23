import {ObjectId} from 'mongodb'
import {handleError} from './errorHandler'

export const validateObjectId = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res
      .status(404)
      .send(handleError(new Error('Resource not found'), 404))
  }
  next()
}
