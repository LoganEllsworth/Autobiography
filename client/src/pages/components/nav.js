import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { Menu, LinkedIn, GitHub } from '@mui/icons-material';
import { useState } from 'react';
import headshot3 from '../../assets/headshot3.png';

//Easily add pages to top nav by adding title, link, and applicable routing info to App.js
const pages = [
    { title: "History", link: "/history" },
    { title: "About Me", link: "/" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Connect with Me", link: "/connect" },
]

//Render top nav bar & applicable redirected components
const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu((prev) => !prev);
    }

    return (
        <AppBar component="nav" position="static"> {/* Change "fixed" to "static" if want hidden under */}
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent='left'>
                        <IconButton href={'/'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <img className='circularImageIcon' src={headshot3} alt={"My Headshot"} />
                        </IconButton>
                        <IconButton target="_blank" href={'https://github.com/LoganEllsworth'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <GitHub sx={{ fontSize: "32px" }} />
                        </IconButton>
                        <IconButton target="_blank" href={'https://www.linkedin.com/in/logan-ellsworth-238ab017a/'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <LinkedIn sx={{ fontSize: "35px" }} />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent='end'>
                        {pages.map((page, index) => (
                            <Button
                                href={page.link}
                                key={index}
                                sx={{ my: 2, mx: 4, color: 'white', display: 'block' }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            onClick={handleMenu}
                        >
                            <Menu />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent='left'>
                        <IconButton target="_blank" href={'https://github.com/LoganEllsworth'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <GitHub sx={{ fontSize: "32px" }} />
                        </IconButton>
                        <IconButton href={'/'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <img className='circularImageIcon' src={headshot3} alt={"My Headshot"} />
                        </IconButton>
                        <IconButton target="_blank" href={'https://www.linkedin.com/in/logan-ellsworth-238ab017a/'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <LinkedIn sx={{ fontSize: "35px" }} />
                        </IconButton>
                    </Box>

                    <Drawer
                        open={openMenu}
                        onClose={handleMenu}
                    >
                        <List>
                            {pages.map((page, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton href={page.link}>
                                        <ListItemText primary={page.title} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Nav;