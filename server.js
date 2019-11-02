import express from 'express';

//initalize http server
const app = express();

//handle /route
app.get('/', (req, res) =>
	res.send('Hello World')
)

//launch the server on port 3000
const server = app.listen(3000, () => {
	const { address, port } = server.address();
	console.log('listening at http://${address}:${port}');
});
