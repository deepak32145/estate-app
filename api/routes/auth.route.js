import express from 'express';

import {login , register, logout} from '../controllers/auth.controller.js';


const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/users', (req, res) => {
    console.log('Fetching users');
    res.send('Users route');
});

export default router;  

