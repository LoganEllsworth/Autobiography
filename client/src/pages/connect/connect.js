import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { Alert, CircularProgress, Collapse, Fab, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Close, Email, GitHub, LinkedIn, Send } from '@mui/icons-material';
import axios from "axios";
import { API_URL } from "../../constants.js";

const Connect = () => {
	const [loading, setLoading] = useState(false);
	const [displayMessage, setDisplayMessage] = useState(false);
	const [popMessage, setPopMessage] = useState(false);

	// Defines load animations
	const cardVariants = {
		offscreen: { y: '1000%' },
		onscreen: { y: 0, transition: { type: 'spring', bounce: .05, duration: 1.5 } },
	};

	// Yup validation schema definition
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.required('Sender email is required')
			.email('Email is invalid'),
		subject: Yup.string(),
		message: Yup.string()
			.required('Message must be provided')
			.min(10, 'Message too short')
			.max(500, 'Message too long'),
	});

	// Register Yup schema
	const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(validationSchema) });

	// Handle post validation submit, data calls and message responses
	const onSubmit = async data => {
		setLoading(true);
		const response = await createContactRequest(data);
		if (response.success)
			reset();
		setLoading(false);
		runMessage(response);
	}

	// Send API call with connect request
	const createContactRequest = async ({ email, subject, message }) => {
        try {
            const response = await axios.post(`${API_URL}contact`, {
                email,
                subject,
                message,
            });
			
			if (response.status === 200)
            	return { success: true, message: `Message sent.`};
			else
				return { success: false, message: `Failed to send. Please email me directly or try again later.`};
        } catch (error) {
            return { success: false, message: `Failed to send message. ${error}`};
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
			<Box py={'3%'} px={'12%'}>
				<Grid container>
					<Grid item xs={12} container spacing={2}>
						<Grid item xs={12} lg={6}>
							<Collapse in={displayMessage} sx={{ width: '100%' }}>
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
								{!loading ? <Paper className={'basicPaper'}>
									<Typography variant='h4' textAlign='center'>Get in Touch</Typography>
									<Grid container spacing={2} direction='column'>
										<Grid item xs>
											<TextField
												label="Your Email"
												sx={{ width: '100%', marginTop: '2%' }}
												autoComplete={'email'}
												required
												{...register('email')}
												error={errors.email ? true : false}
											/>
											<Typography variant="inherit" color="textSecondary">
												{errors.email?.message}
											</Typography>
											<TextField
												label="Subject"
												sx={{ width: '100%', marginTop: '2%' }}
												{...register('subject')}
											/>
											<TextField
												label="Message"
												sx={{ width: '100%', marginTop: '2%' }}
												multiline
												minRows={4}
												required
												{...register('message')}
												error={errors.message ? true : false}
											/>
											<Typography variant="inherit" color="textSecondary">
												{errors.message?.message}
											</Typography>
										</Grid>
										<Grid item xs sx={{ display: 'flex', justifyContent: 'right', marginTop: '2%' }}>
											<Fab variant="extended" component='button' onClick={handleSubmit(onSubmit)} sx={{ alignSelf: 'flex-end' }}>
												<Send />
												Send
											</Fab>
										</Grid>
									</Grid>
								</Paper>
								:
								<Paper className={'basicPaper'}>
									<CircularProgress />
								</Paper>}
							</motion.div>
						</Grid>
						<Grid item xs={12} lg={6}>
							<motion.div
								variants={cardVariants}
							>
								<Paper className={'basicPaper'}>
									<Typography variant='h4' textAlign='center'>Connect with Me</Typography>
									<Grid container rowSpacing={8} p={'5%'} sx={{display: 'flex', justifyContent: 'space-between'}}>
										<Grid item display='flex' justifyContent={'center'}>
											<IconButton target="_blank" href={'https://www.linkedin.com/in/logan-ellsworth-238ab017a/'}>
												<LinkedIn sx={{ fontSize: 100 }} />
											</IconButton>
										</Grid>
										<Grid item display='flex' justifyContent={'center'}>
											<IconButton href='mailto:loganellsworth20@outlook.com'>
												<Email sx={{ fontSize: 100 }} />
											</IconButton>
										</Grid>
										<Grid item display='flex' justifyContent={'center'}>
											<IconButton target="_blank" href={'https://github.com/LoganEllsworth'}>
												<GitHub sx={{ fontSize: 100 }} />
											</IconButton>
										</Grid>
									</Grid>
								</Paper>
							</motion.div>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</motion.div>
	);
}

export default Connect;