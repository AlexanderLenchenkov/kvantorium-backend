import Project from '../models/Project.js';
import FileService from '../helpers/FileService.js';
import StudentService from '../services/StudentService.js';

class ProjectService {
	async create(project, files) {
		const fileNameProject = FileService.saveFile(files.project, 'projects');
		const fileNamePresentation = FileService.saveFile(files.presentation, 'presentations');
		const fileNamePictures = FileService.saveFile(files.pictures, 'pictures');
		const createdProject = await Project.create({
			...project,
			project: fileNameProject,
			presentation: fileNamePresentation,
			picture: fileNamePictures,
		});
		return createdProject;
	}

	async getAll() {
		const projects = await Project.find();
		return projects;
	}

	async getOne(id) {
		if (!id) {
			throw new Error('не указан ID');
		}
		const project = await Project.findById(id);
		return project;
	}

	async update(project) {
		if (!project._id) {
			throw new Error('не указан ID');
		}
		const updatedProject = await Project.findByIdAndUpdate(project._id, project, {
			new: true,
		});
		return updatedProject;
	}

	async delete(id) {
		if (!id) {
			throw new Error('не указан ID');
		}
		const deletedProject = await Project.findByIdAndDelete(id);
		return deletedProject;
	}
}

export default new ProjectService();
