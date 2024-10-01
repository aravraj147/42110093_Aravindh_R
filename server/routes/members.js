import { Router } from 'express';
const router = Router();
import { find } from '../models/member.js';

// GET all members
router.get('/', async (req, res) => {
  try {
    const members = await find();
    res.json(members);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;

