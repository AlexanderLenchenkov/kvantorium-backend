import mongoose from 'mongoose';

const Admin = new mongoose.Schema({
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
	login: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

export default mongoose.model('Admin', Admin);
