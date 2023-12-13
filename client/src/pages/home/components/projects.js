import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ItemTemplate from "./itemTemplate";

const projects = [
	{
		title: 'Autobiography',
        company: 'Personal',
        titleUrl: 'https://github.com/LoganEllsworth/Autobiography',
		dateRange: 'Dec 2023 - Present',
		bullets: [
			'AWS Amplify',
            'AWS Lambda',
            'AWS DynamoDB',
            'React.js',
            'Material UI',
            'RESTful services',
		]
	},
    {
        title: 'Digital Pantry',
        company: 'ASU',
        titleUrl: 'https://github.com/DigitalPantry',
		dateRange: 'Sept 2023 - Present',
		bullets: [
			'React Native',
            'Mobile App',
            'PostgreSQL',
            'Docker',
            'TypeScript',
            'RESTful services',
		]
    },
    {
        title: 'Photo Sharing App',
        company: 'ASU',
        titleUrl: 'https://github.com/LoganEllsworth/Full-Stack-Photo-Sharing-Application',
		dateRange: 'Feb 2023 - April 2023',
		bullets: [
			'React.js',
            'PostgreSQL',
            'Bootstrap',
            'RESTful services',
		]
    },
]
//NEED TO ADD TITLEURL PROP TO ITEM TEMPLATE AS WELL AS HANDLE MOBILE STYLING FOR THE SPACING AND LINE BREAKS
const Projects = ({ variants, isMobile }) => {
    return (
        <Grid item>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Typography variant='h4' textAlign={isMobile ? 'center' : null} py={'2%'}>Projects</Typography>
                    {projects.map((x, index) => <ItemTemplate data={x} key={index} />)} 
                </Paper>
            </motion.div>
        </Grid>
    )
}

export default Projects;