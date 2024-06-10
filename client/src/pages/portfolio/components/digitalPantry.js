import { Box, Card, CardContent, CardMedia, CircularProgress, FormControl, Grid, IconButton, InputLabel, Link, MenuItem, Paper, Select, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AccountImg from "../../../assets/digitalPantryAccount.jpg";
import CreateItemImg from "../../../assets/digitalPantryCreateItem.jpg";
import LandingPageImg from "../../../assets/digitalPantryLandingPage.jpg";
import { SkipNext, SkipPrevious } from "@mui/icons-material";

const portfolioImages = [
    {
        title: "Landing Page",
        description: "Login and Registration Page",
        image: LandingPageImg,
    },
    {
        title: "Create Ingredient",
        description: "Pantry and Create Item Pages",
        image: CreateItemImg,
    },
    {
        title: "Manage Account",
        description: "Account and Household Management Page",
        image: AccountImg,
    },
]

const DigitalPantry = ({ variants, isMobile }) => {
    const [currentImage, setCurrentImage] = useState(portfolioImages[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImg = () => {
        let newIndex = (currentIndex - 1 + portfolioImages.length) % portfolioImages.length;
        setCurrentImage(portfolioImages[newIndex]);
        setCurrentIndex(newIndex);
    }

    const nextImg = () => {
        let newIndex = (currentIndex + 1) % portfolioImages.length;
        setCurrentImage(portfolioImages[newIndex]);
        setCurrentIndex(newIndex);
    }

    return (
        <Grid item xs sx={{ width: '100%' }}>
            <motion.div
                variants={variants}
            >
                <Paper className={'basicPaper'}>
                    <Grid container direction='row'>
                        <Typography variant='h4'>Digital Pantry Mobile App</Typography>
                    </Grid>
                    <Grid container direction='row' spacing={2} justifyContent={'space-around'}>
                        <Grid item xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography variant='subtitle1' textAlign={'center'} padding={2}>
                                Digital Pantry is a mobile application compatible with Android and iOS.
                                The front end is created using TypeScript and React Native. 
                                The back end is created using TypeScript, Express, PostgreSQL, Docker, and ChatGPT.
                            </Typography>
                            <Typography variant='subtitle1' textAlign={'center'} padding={2}>
                                Users create an account and are able to add the ingredients from their home to their Pantry. Users can easily see what is in stock,
                                what might be expiring, and what they need. From there, they can create shopping lists to better prepare for the store and cut down on food waste.
                                With their current stock in their Pantry, they're also able to generate recipes using AI. We check what ingredients they have available and see what
                                meals they have ready to make. This way, no trips to the store are required, and users are exposed to new foods to try. All of the data users input,
                                from recipes to ingredients, can be shared with all the members of your household. Everyone has the ability to contribute to the grocery list, and
                                create a new recipe for the next meal.
                            </Typography>
                            <Link target="_blank" href={'https://github.com/DigitalPantry'}>
                                <Typography variant='subtitle1' textAlign={'center'}>GitHub Repository</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12} lg={6} justifyContent={'center'} display='flex'>
                            <Box sx={{width: '80%', padding: 2, alignItems: 'center'}}>
                            <Card variant="outlined">
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {currentImage.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {currentImage.description}
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, justifyContent: 'space-around' }}>
                                        <IconButton aria-label="previous" onClick={prevImg}>
                                            <SkipPrevious />
                                        </IconButton>
                                        <IconButton aria-label="next" onClick={nextImg}>
                                            <SkipNext />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 400, width: '100%', objectFit: 'contain', paddingBottom: 5 }}
                                    image={currentImage.image}
                                    alt={currentImage.title}
                                />
                            </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </motion.div>
        </Grid>
    );
}

export default DigitalPantry;