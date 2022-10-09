import AdminService from '../services/AdminService.js';

class AdminController {
	async create(req, res) {
		try {
			const admin = await AdminService.create(req.body);
			res.json(admin);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getAll(req, res) {
		try {
			const admins = await AdminService.getAll();
			res.json(admins);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getOne(req, res) {
		try {
			const admin = await AdminService.getOne(req.params.id);
			res.json(admin);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async update(req, res) {
		try {
			const updatedAdmin = await AdminService.update(req.body);
			res.json(updatedAdmin);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async delete(req, res) {
		try {
			const deletedAdmin = await AdminService.delete(req.params.id);
			res.json(deletedAdmin);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

export default new AdminController();
