import { Box } from "@mui/system";
import { useAppStore } from "../../appStore";
import { Fab, Grid, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import Summary from "./components/summary";
import Name from "./components/name";
import Experience from "./components/experience";
import Certifications from "./components/certifications";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Download from "@mui/icons-material/Download";

const Home = () => {
	const isMobile = useAppStore();
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
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<motion.div
					variants={cardVariants}
				>
					<Box sx={{ display: 'flex', flexDirection: 'row-reverse' }} paddingTop={'3%'} px={'12%'}>
						<Tooltip title="Download via AWS S3 Bucket">
							<Fab variant="extended" sx={{ alignSelf: 'flex-end', marginLeft: '2%' }}>
								<Download />
								PDF
							</Fab>
						</Tooltip>
						<Tooltip title="View JSON via REST API">
							<Fab variant="extended" sx={{ alignSelf: 'flex-end', marginLeft: '2%' }}>
								<Download />
								JSON
							</Fab>
						</Tooltip>
						<Tooltip title="View XML via REST API">
							<Fab variant="extended" sx={{ alignSelf: 'flex-end', marginLeft: '2%' }}>
								<Download />
								XML
							</Fab>
						</Tooltip>
					</Box>
				</motion.div>
				<Grid container spacing={2} px={'12%'} py={'1%'}>
					<Grid item xs={isMobile ? 12 : 8} container direction='column' spacing={2}>
						<Name variants={cardVariants} isMobile={isMobile} />
						{isMobile && <Summary variants={cardVariants} isMobile={isMobile} />}
						<Experience variants={cardVariants} isMobile={isMobile} />
						<Education variants={cardVariants} isMobile={isMobile} />
						<Certifications variants={cardVariants} isMobile={isMobile} />
						{!isMobile && <Grid item xs sx={{ width: '100%' }}>
							<div style={{height: '100%'}}></div>
						</Grid>}
						{!isMobile && <Grid item xs sx={{ width: '100%' }}>
							<div style={{height: '100%'}}></div>
						</Grid>}
						{!isMobile && <Grid item xs sx={{ width: '100%' }}>
							<div style={{height: '100%'}}></div>
						</Grid>}
						{!isMobile && <Grid item xs sx={{ width: '100%' }}>
							<div style={{height: '100%'}}></div>
						</Grid>}
					</Grid>
					<Grid item xs={isMobile ? 12 : 4} container direction='column' spacing={2}>
						{!isMobile && <Summary variants={cardVariants} isMobile={isMobile} />}
						<Projects variants={cardVariants} isMobile={isMobile} />
						<Skills variants={cardVariants} isMobile={isMobile} />
					</Grid>
				</Grid>
			</Box>
		</motion.div>
	);
}

export default Home;