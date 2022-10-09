import mongoose from 'mongoose';

const Student = new mongoose.Schema({
	lastName: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	patronymic: {
		type: String,
		required: true,
	},
});

export default mongoose.model('Student', Student);
