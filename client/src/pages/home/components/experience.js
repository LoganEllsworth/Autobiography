import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ItemTemplate from "./itemTemplate";

const experiences = [
	{
		title: 'Full Stack Software Engineer',
		company: 'Sandhills Global',
		dateRange: 'May 2022 - Present',
		bullets: [
			'Worked on a global load board application for freight shippers and brokers utilizing React, JavaScript, PostgreSQL, and Docker while integrating into an existing C#, .NET and SQL Server ecosystem',
			'Created dynamic data visualization dashboards for premium subscribers using React, RESTful APIs, and SQL queries resulting in a 12% increase in subscription upgrades during the first month',
			'Built CRM capabilities allowing end users to view, favorite, group, and invite users to join the platform resulting in an 8% increase in registrations and positive feedback from clients',
			'Followed WCAG international standards passing 4/4 audits with 100% acceptance',
			'Designed process automation with product managers and sales teams, reducing man hours per call by 14%',
			'Implemented additional payment processing providers utilizing third party APIs',
			'Took ownership over the project and mentored 2 additional developers to grow the program',
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
			'Obsessed with customer experience and satisfaction',
			'Created motivating programs to increase performance and reward good work',
		]
	},
	{
		title: 'Team Leader',
		company: 'Harkins Theaters',
		dateRange: 'March 2019 - May 2021',
		bullets: [
			'Trained new hire groups on best practices',
			'Maintained high standards for organization and cleanliness',
			'Took ownership of day-to-day operating responsibilities',
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