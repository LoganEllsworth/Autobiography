import express from 'express';
import { createContactRequest } from './db.js';
import { getDocument } from './s3.js';
import ServerlessHttp from 'serverless-http';
import cors from 'cors';
const app = express();
const port = 3001;

app.use(express.json());

if (process.env.DEVELOPMENT) {
	app.use(cors());
}

app.get('/', (req, res) => {
	res.send('Hello, my name is Logan!')
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

app.get('/document/:docName', async (req, res) => {
	try {
		const { docName } = req.params;

		const response = await getDocument({ docName });

		res.send(JSON.stringify(response));
	} catch (error) {
		res.status(400).send(`Failed to get document. Error: ${error}`);
	}
});

app.get('/document/raw/:type', async (req, res) => {
	try {
		const { type } = req.params;

		const resumeJson = {
			name: "Logan Ellsworth",
			title: "Software Developer Intern",
			experiences: [
				{
					jobTitle: 'Assistant Manager',
					company: 'Harkins Theaters',
					dateRange: 'May 2021 - May 2022',
					aboutRole: [
						'Created new staff programs and training procedures',
						'Screened and interviewed applicants',
						'Guided 10-50 directs on a given day',
						'Maintained financial logs with 100% accuracy',
						'Excelled in customer management',
						'Managed digital content and hardware for 16 screens',
					]
				},
				{
					jobTitle: 'Team Leader',
					company: 'Harkins Theaters',
					dateRange: 'March 2019 - May 2021',
					aboutRole: [
						'Managed teams of 2-10',
						'Trained new hire groups on best practices',
						'Maintained high standards for organization and cleanliness',
						'Planned workflow and employee breaks',
						'Took ownership of day-to-day operating responsibilities',
						'Aided with customer management',
					]
				},
				{
					jobTitle: 'Team Leader',
					company: 'Harkins Theaters',
					dateRange: 'March 2018 - March 2019',
					aboutRole: [
						'Maintained a professional work environment',
						'Stepped into leadership roles when possible',
						'Strove to enhance guest experience',
					]
				},
			],
			education: [
				{
					degree: 'BS, Computer Science',
					schoolName: 'Arizona State University',
					dateRange: 'Aug 2020 - May 2024',
					aboutProgram: [
						'GPA: 3.7',
						'Minor in Business',
					]
				}
			],
			skills: [
				'JavaScript',
				'React.js',
				'RESTful APIs',
				'Relational Databases',
				'Node.js',
				'npm',
				'CSS',
				'PostgreSQL',
				'C#',
				'Docker',
				'AWS',
				'SQL',
				'.NET',
				'Git',
				'Scrum',
			],
		}

		const resumeXml = `<?xml version="1.0" encoding="UTF-8" ?>
		<resume>
		  <name>Logan Ellsworth</name>
		  <title>Software Developer Intern</title>
		  <experiences>
			<jobTitle>Assistant Manager</jobTitle>
			<company>Harkins Theaters</company>
			<dateRange>May 2021 - May 2022</dateRange>
			<aboutRole>Created new staff programs and training procedures</aboutRole>
			<aboutRole>Screened and interviewed applicants</aboutRole>
			<aboutRole>Guided 10-50 directs on a given day</aboutRole>
			<aboutRole>Maintained financial logs with 100% accuracy</aboutRole>
			<aboutRole>Excelled in customer management</aboutRole>
			<aboutRole>Managed digital content and hardware for 16 screens</aboutRole>
		  </experiences>
		  <experiences>
			<jobTitle>Team Leader</jobTitle>
			<company>Harkins Theaters</company>
			<dateRange>March 2019 - May 2021</dateRange>
			<aboutRole>Managed teams of 2-10</aboutRole>
			<aboutRole>Trained new hire groups on best practices</aboutRole>
			<aboutRole>Maintained high standards for organization and cleanliness</aboutRole>
			<aboutRole>Planned workflow and employee breaks</aboutRole>
			<aboutRole>Took ownership of day-to-day operating responsibilities</aboutRole>
			<aboutRole>Aided with customer management</aboutRole>
		  </experiences>
		  <experiences>
			<jobTitle>Team Leader</jobTitle>
			<company>Harkins Theaters</company>
			<dateRange>March 2018 - March 2019</dateRange>
			<aboutRole>Maintained a professional work environment</aboutRole>
			<aboutRole>Stepped into leadership roles when possible</aboutRole>
			<aboutRole>Strove to enhance guest experience</aboutRole>
		  </experiences>
		  <education>
			<degree>BS, Computer Science</degree>
			<schoolName>Arizona State University</schoolName>
			<dateRange>Aug 2020 - May 2024</dateRange>
			<aboutProgram>GPA: 3.7</aboutProgram>
			<aboutProgram>Minor in Business</aboutProgram>
		  </education>
		  <skills>JavaScript</skills>
		  <skills>React.js</skills>
		  <skills>RESTful APIs</skills>
		  <skills>Relational Databases</skills>
		  <skills>Node.js</skills>
		  <skills>npm</skills>
		  <skills>CSS</skills>
		  <skills>PostgreSQL</skills>
		  <skills>C#</skills>
		  <skills>Docker</skills>
		  <skills>AWS</skills>
		  <skills>SQL</skills>
		  <skills>.NET</skills>
		  <skills>Git</skills>
		  <skills>Scrum</skills>
		</resume>`;

		if (type === 'json') {
			res.json(resumeJson);
		} else {
			res.type('application/xml');
			res.send(resumeXml);
		}

	} catch (error) {
		res.status(400).send(`Failed to get raw format resume. Error: ${error}`);
	}
});

if (process.env.DEVELOPMENT) {
	app.listen(port, () => {
		console.log(`api listening on port ${port}`)
	});
}

export const handler = ServerlessHttp(app);