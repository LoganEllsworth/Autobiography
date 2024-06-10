import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ItemTemplate from "./itemTemplate";

const educations = [
	{
		title: 'B.S. in Computer Science',
		company: 'Arizona State University',
		dateRange: 'Aug 2020 - May 2024',
		bullets: [
			'Machine Learning, SDLC, Software Distributions and Integrations, Mobile Applications',
            'Minor in Business',
        ]
    }
]

const Education = ({ variants, isMobile }) => {
    return (
        <Grid item xs sx={{ width: '100%' }}>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Typography variant='h4' textAlign={isMobile ? 'center' : null} py={'2%'}>Education</Typography>
                    {educations.map((x, index) => <ItemTemplate data={x} key={index} isMobile={isMobile} />)}
                </Paper>
            </motion.div>
        </Grid>
    )
}

export default Education;