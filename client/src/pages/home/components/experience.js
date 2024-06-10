import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ItemTemplate from "./itemTemplate";

const experiences = [
	{
		title: 'Software Developer',
		company: 'Sandhills Global',
		dateRange: 'May 2022 - Present',
		bullets: [
			'Full-Stack Global E-Commerce Development using React, JavaScript, PostgreSQL and Docker',
			'Created new data visualization dashboards using React, Express APIs, and SQL queries for end users',
			'Maintained, tested, and debugged digital payment processing utilizing third party APIs',
			'Created front end content that followed WCAG international standards across screen sizes and resolutions',
			'Designed CRM features with stakeholders and product managers',
			'Collaborating with Sales teams to create process automation',
			'Took ownership and became project point of contact and trainer, onboarding 2 developers',
			'Implemented Express API authorization features and employee network validation to enhance security',
			'Completed a database migration from PostgreSQL to SQL Server while maintaining 100% data integrity',
			'Analyzed development requests and participated in sprint planning and retrospective meetings',
		]
	},
	{
		title: 'Assistant Manager',
		company: 'Harkins Theaters',
		dateRange: 'May 2021 - May 2022',
		bullets: [
			'Promoted 6 levels from Team Member to Assistant Manager 4 since 2018',
			'Emphasized staff development and training to the highest standard',
			'Managed 10-50 staff members overseeing daily operations',
			'Maintained records and financial logs with 100% accuracy',
			'Obsessed with customer experience and satisfaction',
		]
	},
	{
		title: 'Team Leader',
		company: 'Harkins Theaters',
		dateRange: 'March 2019 - May 2021',
		bullets: [
			'Managed teams of 2-10',
			'Trained new hire groups on best practices',
			'Maintained high standards for organization and cleanliness',
			'Planned workflow and employee breaks',
			'Took ownership of day-to-day operating responsibilities',
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
			'Strove to enhance guest experience',
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