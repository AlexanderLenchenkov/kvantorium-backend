import TeacherService from '../services/TeacherService.js';

class TeacherController {
	async create(req, res) {
		try {
			const teacher = await TeacherService.create(req.body);
			res.json(teacher);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getAll(req, res) {
		try {
			const teachers = await TeacherService.getAll();
			res.json(teachers);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getOne(req, res) {
		try {
			const teacher = await TeacherService.getOne(req.params.id);
			res.json(teacher);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async update(req, res) {
		try {
			const updatedTeacher = await TeacherService.update(req.body);
			res.json(updatedTeacher);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async delete(req, res) {
		try {
			const deletedTeacher = await TeacherService.delete(req.params.id);
			res.json(deletedTeacher);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

export default new TeacherController();
