import express from 'express';
import ProjectController from '../controllers/ProjectController.js';

const router = express.Router();

router.post('/projects', ProjectController.create);
router.get('/projects', ProjectController.getAll);
router.get('/projects/:id', ProjectController.getOne);
router.put('/projects', ProjectController.update);
router.delete('/projects/:id', ProjectController.delete);

export default router;
