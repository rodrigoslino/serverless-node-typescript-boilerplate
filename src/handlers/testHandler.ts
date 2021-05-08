import express, { Request, Response } from 'express';
import 'source-map-support/register';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/me', auth, async (req: Request, res: Response) => {
  res.send('teste');
});

export default router;
