import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: 'Описание отсутствует',
		},
		tags: {
			type: Array,
			default: [],
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
			ref: 'Category',
		},
		viewsCount: {
			type: Number,
			default: 0,
		},
		dateStart: {
			type: Date,
			default: new Date(),
		},
		dateEnd: {
			type: Date,
			default: new Date(),
		},
		projectUrl: {
			type: String,
			required: false,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		students: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: false,
			},
		],
		teacher: {
			type: mongoose.Schema.Types.ObjectId,
			required: false,
			ref: 'User',
		},
	},
	{ timestamps: true },
);

export default mongoose.model('Project', ProjectSchema);
