import { Box } from "@mui/system";
import { useAppStore } from "../../appStore";
import { Alert, Collapse, Fab, Grid, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import Summary from "./components/summary";
import Name from "./components/name";
import Experience from "./components/experience";
import Certifications from "./components/certifications";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Download from "@mui/icons-material/Download";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import axios from "axios";
import { API_URL } from "../../constants";

const Home = () => {
	const isMobile = useAppStore();
	const [loading, setLoading] = useState(false);
	const [displayMessage, setDisplayMessage] = useState(false);
	const [popMessage, setPopMessage] = useState(false);
	const [pdfData, setPdfData] = useState();
	const cardVariants = {
		offscreen: { y: '1000%' },
		onscreen: { y: 0, transition: { type: 'spring', bounce: .05, duration: 1.5 } },
	};

	const downloadData = async (type) => {
		setLoading(true);
		let response = {success: false, message: 'Failed to fetch data.'};
		
		switch (type) {
			case 'json':
				response = await fetchData({ rawForm: '/json', route: 'raw' });
				break;

			case 'xml':
				response = await fetchData({ rawForm: '/xml', route: 'raw' });
				break;

			default:
				response = await fetchData({ rawForm: null, route: 'Ellsworth_Logan_Resume.pdf' });
				break;
		}

		setLoading(false);
		runMessage(response);
	}

	// Send API call with connect request
	const fetchData = async ({ rawForm, route }) => {
		try {
			let url = `${API_URL}document/${route}`;
			
			if (rawForm)
				url += rawForm;

			const response = await axios.get(url);

			if (!rawForm) {
				const pdfContent = response.body;
				const blob = new Blob([pdfContent], {type: 'application/pdf'});
				const link = document.createElement('a');
				link.href = window.URL.createObjectURL(blob);
				link.download = 'Ellsworth-Logan-Resume.pdf';
				link.click();
				window.URL.revokeObjectURL(link.href);
				setPdfData(pdfContent);
			} else {
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
					<Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}  px={'12%'}>
						{/* <Tooltip title="Download via AWS S3 Bucket">
							<Fab variant="extended" sx={{ alignSelf: 'flex-end', marginLeft: '2%' }} onClick={() => downloadData('pdf')}>
								<Download />
								PDF
							</Fab>
						</Tooltip> */}
						<Tooltip title="View JSON via REST API">
							<Fab variant="extended" sx={{ alignSelf: 'flex-end', marginLeft: '2%' }} onClick={() => downloadData('json')}>
								<Download />
								JSON
							</Fab>
						</Tooltip>
						<Tooltip title="View XML via REST API">
							<Fab variant="extended" sx={{ alignSelf: 'flex-end', marginLeft: '2%' }} onClick={() => downloadData('xml')}>
								<Download />
								XML
							</Fab>
						</Tooltip>
					</Box>
				</motion.div>
				<Grid container spacing={2} px={'12%'} py={'1%'}>
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