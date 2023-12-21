import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ItemTemplate from "./itemTemplate";

const certifications = [
	{
		title: 'Certified Cloud Practitioner',
		company: 'AWS',
		dateRange: 'Nov 2023 - Nov 2026',
		bullets: [
			'CredID: 27GZKL328B11Q2K1'
		]
	}
]

const Certifications = ({ variants, isMobile }) => {
    return (
        <Grid item xs sx={{ width: '100%' }}>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Typography variant='h4' textAlign={isMobile ? 'center' : null} py={'2%'}>Certifications</Typography>
                    {certifications.map((x, index) => <ItemTemplate data={x} key={index} isMobile={isMobile} />)}
                </Paper>
            </motion.div>
        </Grid>
    )
}

export default Certifications;