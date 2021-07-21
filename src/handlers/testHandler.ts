import express, { Request, Response } from 'express';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/me', auth, async (_req: Request, res: Response) => {
  res.send('teste');
});

export default router;
