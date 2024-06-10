import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { useState } from "react";
import DataVisDemo from "./components/dataVisDemo.js";
import { useAppStore } from "../../appStore.js";
import DigitalPantry from "./components/digitalPantry.js";

const Portfolio = () => {
    const isMobile = useAppStore();
	const [loading, setLoading] = useState(false);
	const [displayMessage, setDisplayMessage] = useState(false);
	const [popMessage, setPopMessage] = useState(false);

    // Defines load animations
	const cardVariants = {
		offscreen: { y: '1000%' },
		onscreen: { y: 0, transition: { type: 'spring', bounce: .05, duration: 1.5 } },
	};

	return (
		<motion.div
			initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "200% 0% -50% 0%" }}
            style={{ width: '100%' }}
        >
            <Box py={'3%'} px={'12%'}>
                <Grid container>
                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12}>
                            <DigitalPantry variants={cardVariants} isMobile={isMobile} />
                        </Grid>
                        <Grid item xs={12}>
                            <DataVisDemo variants={cardVariants} isMobile={isMobile} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </motion.div>
    );
}

export default Portfolio;