import mongoose, { Types } from 'mongoose';

const Project = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: 'Описание',
		},
		dateStart: {
			type: Date,
			default: new Date(),
		},
		dateEnd: {
			type: Date,
			default: new Date(),
		},
		project: {
			type: String,
			required: true,
		},
		presentation: {
			type: String,
			required: true,
		},
		picture: {
			type: String,
			required: true,
		},
		students: [
			{
				type: Types.ObjectId,
				required: true,
				ref: 'Student',
			},
		],
		teacher: {
			type: Types.ObjectId,
			required: true,
			ref: 'Teacher',
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Project', Project);
