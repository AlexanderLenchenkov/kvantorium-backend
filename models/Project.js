import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		text: {
			type: String,
		},
		tags: {
			type: Array,
			default: [],
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Category',
		},
		viewsCount: {
			type: Number,
			default: 0,
		},
		dateStart: {
			type: Date,
		},
		dateEnd: {
			type: Date,
		},
		projectUrl: {
			type: String,
		},
		imageUrl: {
			type: String,
		},
		students: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true,
			},
		],
		teacher: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{ timestamps: true },
);

export default mongoose.model('Project', ProjectSchema);
