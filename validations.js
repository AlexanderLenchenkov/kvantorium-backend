import { body } from 'express-validator';

export const registerValidation = [
	body('lastName', 'Неверный формат фамилии').isLength({ min: 2 }).isString(),
	body('firstName', 'Неверный формат имени').isLength({ min: 2 }).isString(),
	body('patronymic', 'Неверный формат отчества').isLength({ min: 2 }).isString(),
	body('login', 'Неверный формат логина').isLength({ min: 5 }).isString(),
	body('password', 'Неверный формат пароля').isLength({ min: 5 }).isString(),
];

export const loginValidation = [
	body('login', 'Неверный формат почты').isLength({ min: 5 }),
	body('password', 'Пароль должен состоять минимум из 5 символов').isLength({ min: 5 }),
];

export const projectCreateValidation = [
	body('name', 'Введите наименование проекта').isLength({ min: 3 }).isString(),
	body('tags', 'Неверный формат тэгов').optional().isString(),
	body('description', 'Введите описание проекта').isString().isLength({ min: 3 }),
	body('category', 'Выберите категорию проекта').isString(),
	body('teacher', 'Укажите руководителя проекта').isString(),
	body('students', 'Укажите участников проекта').isArray({ min: 1 }),
	body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
	body('projectUrl', 'Прикрепите проект').optional().isString(),
	body('dateStart', 'Укажите дату начала проекта').optional().isString(),
	body('dateEnd', 'Укажите дату окончания проекта').optional().isString(),
];
