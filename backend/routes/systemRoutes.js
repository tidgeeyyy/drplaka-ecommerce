import express from 'express';
import { fetchRecords } from '../controllers/systemController.js';
const router = express.Router();

router.get('/', fetchRecords);


export default router; 