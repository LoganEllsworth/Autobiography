import { Grid, Paper, Typography } from "@mui/material";
import { motion } from 'framer-motion';

const TimelineEvent = ({ onLeft, subtitle, header, body, CustIcon }) => {
    const cardVariants = {
            offscreen: { opacity: .3, scale: .9 },
            onscreen: { opacity: 1, scale: 1, transition: { duration: .6 } },
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, margin: "200% 0% -50% 0%" }}
            style={{ width: '100%' }}
        >
            <motion.div
                variants={cardVariants}
                className={onLeft ? 'timelineItemWrapperLeft' : null}
            >
                <Paper className={onLeft ? 'timelinePaperLeft' : 'timelinePaperRight'}>
                    <Grid container direction={onLeft ? 'row-reverse' : 'row'}>
                        <Grid item xs={12} xl={2} className={onLeft ? 'timelineIconLeft' : 'timelineIconRight'}>
                            <CustIcon fontSize='large' />
                        </Grid>
                        <Grid item xs={12} xl={10}>
                            <Typography variant='subtitle2'>{subtitle}</Typography>
                            <Typography variant='h4'>{header}</Typography>
                            <Typography paragraph={true} variant='body1' className='timelineBodyText'>
                                {body}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </motion.div>
        </motion.div>
    );
}

export default TimelineEvent;