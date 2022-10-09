import ProjectService from '../services/ProjectService.js';

class ProjectController {
	async create(req, res) {
		try {
			const project = await ProjectService.create(req.body, req.files);
			res.json(project);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getAll(req, res) {
		try {
			const projects = await ProjectService.getAll();
			res.json(projects);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getOne(req, res) {
		try {
			const project = await ProjectService.getOne(req.params.id);
			res.json(project);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async update(req, res) {
		try {
			const updatedProject = await ProjectService.update(req.body);
			res.json(updatedProject);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async delete(req, res) {
		try {
			const deletedProject = await ProjectService.delete(req.params.id);
			res.json(deletedProject);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

export default new ProjectController();
