import Teacher from '../models/Teacher.js';

class TeacherService {
	async create(teacher) {
		const createdTeacher = await Teacher.create({ ...teacher });
		return createdTeacher;
	}

	async getAll() {
		const teachers = await Teacher.find();
		return teachers;
	}

	async getOne(id) {
		if (!id) throw new Error('не указан ID');
		const teacher = await Teacher.findById(id);
		return teacher;
	}

	async update(teacher) {
		if (!teacher._id) {
			throw new Error('не указан ID');
		}
		const updatedTeacher = await Teacher.findByIdAndUpdate(teacher._id, teacher, {
			new: true,
		});
		return updatedTeacher;
	}

	async delete(id) {
		if (!id) {
			throw new Error('не указан ID');
		}
		const deletedTeacher = await Teacher.findByIdAndDelete(id);
		return deletedTeacher;
	}
}

export default new TeacherService();
