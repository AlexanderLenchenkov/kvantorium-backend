import express from 'express';

import { UserController } from '../controllers/index.js';
import { loginValidation, registerValidation } from '../validations.js';
import { checkAuth, handleValidationErrors } from '../utils/index.js';

const router = express.Router();
router.post('/admin/login', loginValidation, handleValidationErrors, UserController.login);
router.get('/admin/me', checkAuth, UserController.getMe);
router.post('/admin/register', registerValidation, handleValidationErrors, UserController.register);
router.get('/users', checkAuth, UserController.getAll);

export default router;
