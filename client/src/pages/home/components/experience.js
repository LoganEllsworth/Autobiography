import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ItemTemplate from "./itemTemplate";

const experiences = [
	{
		title: 'Software Developer',
		company: 'Sandhills Global',
		dateRange: 'May 2022 - Present',
		bullets: [
			'Full-Stack E-Commerce Development',
			'Designed features with stakeholders resulting in 30% revenue growth YoY',
			'Delivered new data visualization dashboards and reporting features resulting in 10% subscription growth',
			'Collaborating with Sales teams to create more automation and reduced man hours per call by 25%',
			'Took ownership and became project point of contact and trainer, onboarding 2 employees',
			'Implemented API security features and employee network validation to enhance security',
			'Led the implementation of new user types resulting in 15% registration increases',
			'Optimized legacy components with reusable components and a modern UI',
			'Analyzed, planned, and currently implementing a mass migration and rewrite to MSSQL and Azure',
			'Completed QA reports, bug reports, and code reviews',
		]
	},
	{
		title: 'Assistant Manager',
		company: 'Harkins Theaters',
		dateRange: 'May 2021 - May 2022',
		bullets: [
			'Created new staff programs and training procedures',
			'Emphasized staff development and trained to the highest standard',
			'Managed 10-50 staff members overseeing daily operations',
			'Maintained records and financial logs with 100% accuracy',
			'Obsessed over guest experience and satisfaction',
			'Managed digital content and hardware for 16 screens',
		]
	},
	{
		title: 'Team Leader',
		company: 'Harkins Theaters',
		dateRange: 'March 2019 - May 2021',
		bullets: [
			'Managed schedules and breaks for 2-15 team members',
			'Trained new hire groups on best practices',
			'Maintained high standards for organization and cleanliness',
			'Created motivating programs to increase performance and reward good work',
		]
	},
	{
		title: 'Team Member',
		company: 'Harkins Theaters',
		dateRange: 'March 2018 - March 2019',
		bullets: [
			'Maintained a professional work environment',
			'Took on leadership opportunities to grow within the company',
		]
	},
]

const Experience = ({ variants, isMobile }) => {
    return (
        <Grid item xs sx={{ width: '100%' }}>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Typography variant='h4' textAlign={isMobile ? 'center' : null} py={'2%'}>Experience</Typography>
                    {experiences.map((x, index) => <ItemTemplate data={x} key={index} isMobile={isMobile} />)}
                </Paper>
            </motion.div>
        </Grid>
    )
}

export default Experience;