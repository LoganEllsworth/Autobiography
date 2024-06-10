import { Grid, Link, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import headshot3 from "../../../assets/headshot3.png";

const Name = ({ variants, isMobile }) => {
    return (
        <Grid item xs sx={{ width: '100%' }}>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Grid container direction='row' justifyContent={isMobile ? 'center' : 'space-between'}>
                        {isMobile && <Grid item sx={{justifySelf: 'center'}}>
                            <img className='circularImage' src={headshot3} alt={"My Headshot"} />
                        </Grid>}
                        <Grid item>
                            <Typography variant='h4' textAlign={isMobile ? 'center' : null}>Logan Ellsworth</Typography>
                            <Typography variant='subtitle1' textAlign={isMobile ? 'center' : null}>Software Developer - Open to Work</Typography>
                            <Link href='mailto:loganellsworth20@outlook.com'><Typography variant='subtitle1' textAlign={isMobile ? 'center' : null}>loganellsworth20@outlook.com</Typography></Link>
                        </Grid>
                        {!isMobile && <Grid item>
                            <img className='circularImage' src={headshot3} alt={"My Headshot"} />
                        </Grid>}
                    </Grid>
                </Paper>
            </motion.div>
        </Grid>
    );
}

export default Name;