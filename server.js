import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
import bodyParser from 'express';

//initalize http server
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser:true});

const app = express();
app.use(bodyParser.json());

app.use(morgan('combined'));

app.get('/', (req, res) => res.send('hello dad'))

app.use('/v1', router);

//launch the server on port 3000
const server = app.listen(3000, () => {
	const { address, port } = server.address();
	console.log(`listening at http://${address}:${port}`);
});
