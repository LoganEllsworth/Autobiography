import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SkillTemplate from "./skillTemplate";

const skills = [
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