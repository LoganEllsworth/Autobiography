import { Grid, Link, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Name = ({ variants, isMobile }) => {
    return (
        <Grid item xs sx={{ width: '100%' }}>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Grid container direction='row' justifyContent={isMobile ? 'center' : 'space-between'}>
                        {isMobile && <Grid item sx={{justifySelf: 'center'}}>
                            <img className='circularImage' src={'https://cdn.discordapp.com/attachments/504065122713468939/1183297490053775391/dem-headshot.jpg?ex=6587d2aa&is=65755daa&hm=a83d26c7904934d67db63296cfbc42445b0df465c55cbe5793430cd769d6b2c0&'} alt={"My Headshot"} />
                        </Grid>}
                        <Grid item>
                            <Typography variant='h4' textAlign={isMobile ? 'center' : null}>Logan Ellsworth</Typography>
                            <Typography variant='subtitle1' textAlign={isMobile ? 'center' : null}>Software Developer - Sandhills Global</Typography>
                            <Link href='mailto:loganellsworth20@outlook.com'><Typography variant='subtitle1' textAlign={isMobile ? 'center' : null}>loganellsworth20@outlook.com</Typography></Link>
                        </Grid>
                        {!isMobile && <Grid item>
                            <img className='circularImage' src={'https://cdn.discordapp.com/attachments/504065122713468939/1183297490053775391/dem-headshot.jpg?ex=6587d2aa&is=65755daa&hm=a83d26c7904934d67db63296cfbc42445b0df465c55cbe5793430cd769d6b2c0&'} alt={"My Headshot"} />
                        </Grid>}
                    </Grid>
                </Paper>
            </motion.div>
        </Grid>
    );
}

export default Name;