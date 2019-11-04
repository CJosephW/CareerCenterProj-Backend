import Student from '../models/student';
import moment from 'moment';

const classes = ['AM', 'PM'];
const AMStudents = ['George', 'Jerry', 'John'];
const PMStudents = ['Cammie', 'Arthur', 'Barry'];

export const index = (req, res, next) => {
	Student.find().lean().exec((err, students) => res.json(
		{sudents: students.map(student => ({
			classes,
			AMStudents,
			PMStudents,
		}))}
	));
};
