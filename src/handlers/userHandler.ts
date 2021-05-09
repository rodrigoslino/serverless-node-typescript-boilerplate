import express, { Request, Response } from 'express';
import { auth } from '../middleware/auth';
import { add, getMe, getToken } from '../services/userService';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { token, resultNewUser } = await add(req.body);

    res.header('x-auth-token', token).send(resultNewUser);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

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
