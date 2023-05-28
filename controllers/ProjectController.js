import CategoryModel from '../models/Category.js';
import ProjectModel from '../models/Project.js';
import mongoose from 'mongoose';

export const create = async (req, res) => {
	try {
		const doc = new ProjectModel({
			name: req.body.name,
			description: req.body.description,
			tags: req.body.tags,
			category: req.body.category,
			dateStart: req.body.dateStart,
			dateEnd: req.body.dateEnd,
			projectUrl: req.body.projectUrl,
			imageUrl: req.body.imageUrl,
			students: req.body.students.map((id) => mongoose.Types.ObjectId(id)),
			teacher: mongoose.Types.ObjectId(req.body.teacher),
		});

		const post = await doc.save();

		res.json(post);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Не удалось создать проект',
		});
	}
};

export const update = async (req, res) => {
	try {
		const projectId = req.params.id;

		await ProjectModel.updateOne(
			{ _id: projectId },
			{
				name: req.body.name,
				description: req.body.description,
				tags: req.body.tags,
				category: req.body.category,
				dateStart: req.body.dateStart,
				dateEnd: req.body.dateEnd,
				projectUrl: req.body.projectUrl,
				imageUrl: req.body.imageUrl,
				students: req.body.students.map((id) => mongoose.Types.ObjectId(id)),
				teacher: mongoose.Types.ObjectId(req.body.teacher),
			},
		);

		res.json({
			success: true,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Не удалось обновить информацию о проекте',
		});
	}
};

export const getOne = async (req, res) => {
	try {
		const projectId = req.params.id;

		ProjectModel.findOneAndUpdate(
			{
				_id: projectId,
			},
			{
				$inc: { viewsCount: 1 },
			},
			{
				returnDocument: 'after',
			},
			(err, doc) => {
				if (err) {
					console.log(err);
					return res.status(500).json({
						message: 'Не удалось вернуть проект',
					});
				}

				if (!doc) {
					return res.status(404).json({
						message: 'Проект не найден',
					});
				}

				res.json(doc);
			},
		)
			.populate('teacher')
			.populate('students');
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Не удалось получить проект',
		});
	}
};

export const getAll = async (req, res) => {
	try {
		const projects = await ProjectModel.find().populate('teacher').populate('students').exec();
		res.json(projects);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Не удалось получить проекты',
		});
	}
};

export const getCategories = async (req, res) => {
	try {
		const categories = await CategoryModel.find().exec();
		res.json(categories);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Не удалось получить категории',
		});
	}
};

export const remove = async (req, res) => {
	try {
		const projectId = req.params.id;

		ProjectModel.findOneAndDelete(
			{
				_id: projectId,
			},
			(err, doc) => {
				if (err) {
					console.log(err);
					return res.status(500).json({
						message: 'Не удалось удалить проект',
					});
				}

				if (!doc) {
					return res.status(404).json({
						message: 'Проект не найден',
					});
				}

				res.json({
					success: true,
				});
			},
		);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Не удалось удалить статью',
		});
	}
};
