import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SkillTemplate from "./skillTemplate";

const skills = [
	'JavaScript',
	'C#',
	'Python',
	'Web Services',
	'AWS',
	'SQL',
	'PostgreSQL',
	'RDBMS',
	'Node.js',
	'.NET',
	'Data Visualization',
	'HTML',
	'CSS',
	'React.js',
	'Docker',
	'Git',
	'Agile',
	'Scrum',
]

const Skills = ({ variants, isMobile }) => {
    return (
        <Grid item>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Typography variant='h4' textAlign={isMobile ? 'center' : null} py={'2%'}>Skills</Typography>
                    <Grid container spacing={1} p={'3%'}>
                        {skills.map((x, index) => <SkillTemplate data={x} key={index} />)}
                    </Grid>
                </Paper>
            </motion.div>
        </Grid>
    )
}

export default Skills;