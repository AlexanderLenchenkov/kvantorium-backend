import mongoose from 'mongoose';

const UserRoleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
});

export default mongoose.model('UserRole', UserRoleSchema);
