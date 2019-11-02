import mongoose from 'mongoose';
import Student from './models/student';

const students = [
	{
		name: 'Michael Ball',
		skills: [
			['Michael Ball', '2342234', '10/2/2019','good','well', 'Jerry Simons', '10/20/2019']
		]
	},
];

mongoose.connect('mongodb://localhost/students');

students.map(data => {
	const student = new Student(data);
	student.save();
});

