import StudentService from '../services/StudentService.js';

class StudentController {
	async create(req, res) {
		try {
			const student = await StudentService.create(req.body);
			res.json(student);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getAll(req, res) {
		try {
			const students = await StudentService.getAll();
			res.json(students);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getOne(req, res) {
		try {
			const student = await StudentService.getOne(req.params.id);
			res.json(student);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async update(req, res) {
		try {
			const updatedStudent = await StudentService.update(req.body);
			res.json(updatedStudent);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async delete(req, res) {
		try {
			const deletedStudent = await StudentService.delete(req.params.id);
			res.json(deletedStudent);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

export default new StudentController();
