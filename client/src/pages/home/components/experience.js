import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ItemTemplate from "./itemTemplate";

const experiences = [
	{
		title: 'Software Developer',
		company: 'Sandhills Global',
		dateRange: 'May 2022 - Present',
		bullets: [
			'Primary Technologies: PostgreSQL, React.js, Node.js, RESTful APIs, C#, Git, npm',
			'Optimized legacy components with an updated UI and reusable components',
			'Addressed tech-debt, including significant Node and CSS framework upgrades',
			'Led the implementation of new user types resulting in 15% registration increases',
			'Implemented features resulting in 30% revenue growth YoY',
			'Created API security features and employee network validation to enhance security',
		]
	},
	{
		title: 'Assistant Manager',
		company: 'Harkins Theaters',
		dateRange: 'March 2018 - May 2022',
		bullets: [
			'Created new staff programs and training procedures',
			'Screened and interviewed applicants',
			'Guided 10-50 directs on a given day',
			'Maintained financial logs with 100% accuracy',
			'Excelled in customer management',
			'Managed digital content and hardware for 16 screens',
		]
	}
]

const Experience = ({ variants, isMobile }) => {
    return (
        <Grid item xs sx={{ width: '100%' }}>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Typography variant='h4' textAlign={isMobile ? 'center' : null} py={'2%'}>Experience</Typography>
                    {experiences.map((x, index) => <ItemTemplate data={x} key={index} />)}
                </Paper>
            </motion.div>
        </Grid>
    )
}

export default Experience;