import mongoose, { Schema } from 'mongoose';

//defining student schema

var studentSchema = new Schema({
	name: {
		type: String,
		unique: true,
	},
	skills: Array,
});

//export mongoose model
export default mongoose.model('student', studentSchema);
