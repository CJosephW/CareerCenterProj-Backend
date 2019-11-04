import express, { Router } from 'express';

import { index } from './controllers/students';

const router = Router();

router.route('/students.json').get(index);

export default router;
