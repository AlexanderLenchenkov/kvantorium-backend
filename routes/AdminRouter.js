import express from 'express';
import AdminController from '../controllers/AdminController.js';

const router = express.Router();
router.post('/admins', AdminController.create);
router.get('/admins', AdminController.getAll);
router.get('/admins/:id', AdminController.getOne);
router.put('/admins', AdminController.update);
router.delete('/admins/:id', AdminController.delete);

export default router;
