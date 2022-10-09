import Admin from '../models/Admin.js';
import bcryptjs from 'bcryptjs';

class AdminService {
	async create(admin) {
		const { password } = admin;
		const hashPassword = bcryptjs.hashSync(password, 7);
		const createdAdmin = await Admin.create({ ...admin, password: hashPassword });
		return createdAdmin;
	}

	async getAll() {
		const admins = await Admin.find();
		return admins;
	}

	async getOne(id) {
		if (!id) {
			throw new Error('не указан ID');
		}
		const admin = await Admin.findById(id);
		return admin;
	}

	async update(admin) {
		if (!admin._id) {
			throw new Error('не указан ID');
		}
		const updatedAdmin = await Admin.findByIdAndUpdate(admin._id, admin, {
			new: true,
		});
		return updatedAdmin;
	}

	async delete(id) {
		if (!id) {
			throw new Error('не указан ID');
		}
		const deletedAdmin = await Admin.findByIdAndDelete(id);
		return deletedAdmin;
	}
}

export default new AdminService();
