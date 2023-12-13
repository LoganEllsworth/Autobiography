import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ItemTemplate from "./itemTemplate";

const educations = [
	{
		title: 'BS, Computer Science',
		company: 'Arizona State University',
		dateRange: 'Aug 2020 - May 2024',
		bullets: [
			'GPA: 3.7',
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
                    {educations.map((x, index) => <ItemTemplate data={x} key={index} />)}
                </Paper>
            </motion.div>
        </Grid>
    )
}

export default Education;