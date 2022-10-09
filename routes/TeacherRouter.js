import express from 'express';
import TeacherController from '../controllers/TeacherController.js';

const router = express.Router();

router.post('/teachers', TeacherController.create);
router.get('/teachers', TeacherController.getAll);
router.get('/teachers/:id', TeacherController.getOne);
router.put('/teachers', TeacherController.update);
router.delete('/teachers/:id', TeacherController.delete);

export default router;
