import Student from '../models/Student.js';

class StudentService {
	async create(student) {
		const createdStudent = await Student.create({ ...student });
		return createdStudent;
	}

	async getAll() {
		const students = await Student.find();
		return students;
	}

	async getOne(id) {
		if (!id) throw new Error('не указан ID');
		const student = await Student.findById(id);
		return student;
	}

	async update(student) {
		if (!student._id) {
			throw new Error('не указан ID');
		}
		const updatedStudent = await Student.findByIdAndUpdate(student._id, student, {
			new: true,
		});
		return updatedStudent;
	}

	async delete(id) {
		if (!id) {
			throw new Error('не указан ID');
		}
		const deletedStudent = await Student.findByIdAndDelete(id);
		return deletedStudent;
	}
}

export default new StudentService();
