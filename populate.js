import mongoose from 'mongoose';
import Student from './models/student';


mongoose.connect('mongodb://localhost/students');

students.map(data => {
	const student = new Student(data);
	student.save();
});

