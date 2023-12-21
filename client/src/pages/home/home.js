import { Box } from "@mui/system";
import { useAppStore } from "../../appStore";
import { Alert, CircularProgress, Collapse, Grid, IconButton, SpeedDial, SpeedDialAction } from "@mui/material";
import { motion } from "framer-motion";
import Summary from "./components/summary";
import Name from "./components/name";
import Experience from "./components/experience";
import Certifications from "./components/certifications";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import { Download, PictureAsPdf, Code, DataObject } from "@mui/icons-material";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import axios from "axios";
import { API_URL } from "../../constants";
import ReactGA from "react-ga4";
import resumePdf from "../../assets/Ellsworth_Logan_Resume.pdf";

const Home = () => {
	const isMobile = useAppStore();
	const [loading, setLoading] = useState(false);
	const [displayMessage, setDisplayMessage] = useState(false);
	const [popMessage, setPopMessage] = useState(false);
	const cardVariants = {
		offscreen: { y: '1000%' },
		onscreen: { y: 0, transition: { type: 'spring', bounce: .05, duration: 1.5 } },
	};
	const downloadAction = [
		{ icon: <PictureAsPdf />, name: 'PDF', tooltip: 'Download as a PDF' },
		{ icon: <DataObject />, name: 'JSON', tooltip: 'View JSON via REST API' },
		{ icon: <Code />, name: 'XML', tooltip: 'View XML via REST API' },
	]

	const downloadData = async (type) => {
		setLoading(true);
		ReactGA.event({ category: 'interaction', action: 'download', label: type })
		let response = {success: false, message: 'Failed to fetch data.'};
		
		switch (type) {
			case 'JSON':
				response = await fetchData({ rawForm: '/json', route: 'raw' });
				break;

			case 'XML':
				response = await fetchData({ rawForm: '/xml', route: 'raw' });
				break;

			default:
				response = await fetchData({ rawForm: null, route: 'Ellsworth_Logan_Resume.pdf' });
				break;
		}

		setLoading(false);
		if (!response.success)
			runMessage(response);
	}

	// Send API call with connect request
	const fetchData = async ({ rawForm, route }) => {
		try {
			if (!rawForm) {
				const link = document.createElement('a');
				link.href = resumePdf;
				link.download = 'Ellsworth-Logan-Resume.pdf';
				document.body.appendChild(link)
				link.click();
				document.body.removeChild(link);
			} else {
				let url = `${API_URL}document/${route}${rawForm}`;
				const response = await axios.get(url);
				const resData = rawForm === '/json' ? JSON.stringify(response.data, null, 2) : response.data;
				const blob = new Blob([resData], { type: `application${rawForm}` });
				const blobUrl = URL.createObjectURL(blob);
				window.open(blobUrl, '_blank');
			}

			return { success: true };
		} catch (error) {
			return { success: false, message: `Failed to fetch data. ${error}` };
		}
	}

	// Handle displaying message with response details
	const runMessage = (response) => {
		setPopMessage(response);
		setDisplayMessage(true);

		const timeout = setTimeout(() => {
			setDisplayMessage(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}

	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, margin: "200% 0% -50% 0%" }}
			style={{ width: '100%' }}
		>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<Collapse in={displayMessage} sx={{ width: '50%', alignSelf: 'center', paddingTop: '1%' }}>
					<Alert
						severity={popMessage.success ? "success" : "error"}
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => setDisplayMessage(false)}
							>
								<Close />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						{popMessage.message}
					</Alert>
				</Collapse>
				<motion.div
					variants={cardVariants}
				>
					<Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}  px={'8%'}>
						<SpeedDial
							ariaLabel="Download Menu"
							icon={loading ? <CircularProgress /> : <Download />}
							direction={"left"}
							FabProps={{size: 'small'}}
						>
							{downloadAction.map(action => (
								<SpeedDialAction
									key={action.name}
									icon={action.icon}
									tooltipTitle={action.tooltip}
									onClick={() => downloadData(action.name)}
								/>
							))}
						</SpeedDial>
					</Box>
				</motion.div>
				<Grid container spacing={2} px={'8%'} py={'1%'}>
					<Grid item xs={isMobile ? 12 : 8} container direction='column' spacing={2} sx={{height: '100%'}}>
						<Name variants={cardVariants} isMobile={isMobile} />
						{isMobile && <Summary variants={cardVariants} isMobile={isMobile} />}
						<Experience variants={cardVariants} isMobile={isMobile} />
						<Education variants={cardVariants} isMobile={isMobile} />
						<Certifications variants={cardVariants} isMobile={isMobile} />
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