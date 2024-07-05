import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ItemTemplate from "./itemTemplate";

const experiences = [
	{
		title: 'Full Stack Software Engineer',
		company: 'Sandhills Global',
		dateRange: 'May 2022 - Present',
		bullets: [
			'Created dynamic data visualization dashboards for premium subscribers using React, Express APIs, and SQL queries resulting in a 12% increase in subscription upgrades during the first month',
			'Built relational CRM capabilities allowing end users to search, favorite, group, and invite users to join the platform resulting in an 8% increase in registrations via invites',
			'Analyzed and implemented development requests on a global e-commerce application using JavaScript, Node.js, React, and PostgreSQL',
			'Integrated an acquired application into a C#, .NET, SQL Server ecosystem, ensuring seamless compatibility',
			'Performed deep dives for support tickets to discover root cause and designed fixes to resolve issues same-day',
			'Created front end content to WCAG international standards, passing 4/4 internal audits with 100% acceptance',
			'Designed process automation by collaborating with sales teams to reduce man hours per call by 14%',
			'Implemented payment processing providers utilizing third party APIs',
			'Took ownership over a global load board application and mentored 2 additional developers while in school full time',
		]
	},
	{
		title: 'Assistant Manager',
		company: 'Harkins Theaters',
		dateRange: 'May 2021 - May 2022',
		bullets: [
			'Promoted 6 levels from Team Member to Assistant Manager 4 within four years',
			'Oversaw the day to day theater operation including a staff of 20-50 people, payroll management, inventory reconciliation and cash flow',
			'Led Day 1 orientation for new employees and oversaw cross training for senior staff to optimize staffing coverage',
			'Handled escalated customer concerns and worked closely with the team to ensure we were delivering on the “Ultimate Moviegoing experience”',
			'Resolved basic troubleshooting concerns with 16 projectors while maintaining a flawless customer experience',
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