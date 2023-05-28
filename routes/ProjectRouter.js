import express from 'express';

import { ProjectController } from '../controllers/index.js';
import { projectCreateValidation } from '../validations.js';
import { handleValidationErrors, checkAuth } from '../utils/index.js';

const router = express.Router();

router.get('/projects', ProjectController.getAll);
router.get('/categories', ProjectController.getCategories);
router.get('/projects/:id', ProjectController.getOne);
router.post(
	'/projects',
	checkAuth,
	projectCreateValidation,
	handleValidationErrors,
	ProjectController.create,
);
router.delete('/projects/:id', checkAuth, ProjectController.remove);
router.patch(
	'/projects/:id',
	checkAuth,
	projectCreateValidation,
	handleValidationErrors,
	ProjectController.update,
);

export default router;
