import express, { Router } from 'express';

import { index } from './controllers/students';

const router = Router();

router.route('/students.json').get(index);

router.route('/skills')
    .post((req, res) => {
        console.log(req.body);

        res.json(req.body)
    });

export default router;
