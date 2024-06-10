import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Summary = ({variants, isMobile}) => {
    return (
        <Grid item>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Typography variant='h4' textAlign={isMobile ? 'center' : null} py={'2%'}>Summary</Typography>
                    <Typography variant='subtitle1' py={1}>
                        I have graduated from Arizona State with a B.S. in Computer Science. Additionally, I have 2 years of professional development
                        experience and 2 years of management experience.
                    </Typography>
                    <Typography variant='subtitle1' py={1}>
                        During my time as a Software Engineer, I worked on a full stack e-commerce web application. The site serves as a bidding portal for shippers and truckers to
                        provide services hauling heavy machinery on a global scale. I primarily worked on a PERN stack (PSQL, Express, React.js, Node.js) with
                        time spent on C# and .NET environments. I thoroughly enjoy my time in this role and have been able to take ownership over the product
                        and make it something I am proud to promote.
                    </Typography>
                    <Typography variant='subtitle1' py={1}>
                        I am extremely grateful for the 4 years I spent at Harkins Theaters as it developed my interpersonal skills as both a manager, mentor,
                        and colleague. It allowed me to develop an incredible work ethic and I take pride in the work I completed and completing it efficiently.
                        Working with a sense of urgency yet maintaining a high expectation for quality is something I am very proud of.
                    </Typography>
                </Paper>
            </motion.div>
        </Grid>
    );
}

export default Summary;