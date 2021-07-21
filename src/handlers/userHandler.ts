import express, { Request, Response } from 'express';
import { Joi, validate } from 'express-validation';
import { auth } from '../middleware/auth';
import { add, getMe, getToken } from '../services/userService';

const router = express.Router();

const loginValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required()
  })
};

router.post(
  '/',
  validate(loginValidation, {}, {}),
  async (req: Request, res: Response) => {
    try {
      const { token, resultNewUser } = await add(req.body);

      res.header('x-auth-token', token).send(resultNewUser);
    } catch (e) {
      res.status(400).send(e.message);
    }
  }
);

router.get('/me', auth, async (req: Request, res: Response) => {
  const { _id } = req['user'];

  const resultData = await getMe(_id);

  res.send(resultData);
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const token = await getToken(req.body);

    res.header('x-auth-token', token).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;
