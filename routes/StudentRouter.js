import express from 'express';
import StudentController from '../controllers/StudentController.js';

const router = express.Router();

router.post('/students', StudentController.create);
router.get('/students', StudentController.getAll);
router.get('/students/:id', StudentController.getOne);
router.put('/students', StudentController.update);
router.delete('/students/:id', StudentController.delete);

export default router;
