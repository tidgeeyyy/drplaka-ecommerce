import express from 'express';
import { authenticateUser, addUser, deleteUser } from '../controllers/userController.js';
const router = express.Router();

router.get('/auth',authenticateUser);

router.post('/add', addUser);

router.delete('/del', deleteUser);

export default router; 