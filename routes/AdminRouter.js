import express from 'express';
import AdminController from '../controllers/AdminController.js';

const router = express.Router();

router.get('/admins', AdminController.getAll);
router.get('/admins/:id', AdminController.getOne);

export default router;
