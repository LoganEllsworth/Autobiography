import express from 'express';
import { createContactRequest } from './db.js';
import ServerlessHttp from 'serverless-http';
import cors from 'cors';
const app = express();
const port = 3001;

app.use(express.json());

if (process.env.DEVELOPMENT) {
	app.use(cors());
}

app.get('/', (req, res) => {
	res.send('Hello World!')
});

app.post('/contact', async (req, res) => {
	try {
		const { email, subject, message } = req.body;

		const response = await createContactRequest({ email, subject, message });

		res.send(response.data);
	} catch (error) {
		res.status(400).send(`Failed to create contact request. Error: ${error}`);
	}
});

if (process.env.DEVELOPMENT) {
	app.listen(port, () => {
		console.log(`api listening on port ${port}`)
	});
}

export const handler = ServerlessHttp(app);