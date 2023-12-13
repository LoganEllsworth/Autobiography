import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';

//Easily add pages to top nav by adding title, link, and applicable routing info to App.js
const pages = [
    { title: "History", link: "/history" },
    { title: "About Me", link: "/" },
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
                            <PersonIcon sx={{ fontSize: "50px" }} />
                        </IconButton>
                        <IconButton target="_blank" href={'https://github.com/LoganEllsworth'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <GitHubIcon sx={{ fontSize: "32px" }} />
                        </IconButton>
                        <IconButton target="_blank" href={'https://www.linkedin.com/in/logan-ellsworth-238ab017a/'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <LinkedInIcon sx={{ fontSize: "35px" }} />
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
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent='left'>
                        <IconButton target="_blank" href={'https://github.com/LoganEllsworth'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <GitHubIcon sx={{ fontSize: "32px" }} />
                        </IconButton>
                        <IconButton href={'/'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <PersonIcon sx={{ fontSize: "50px" }} />
                        </IconButton>
                        <IconButton target="_blank" href={'https://www.linkedin.com/in/logan-ellsworth-238ab017a/'} sx={{ alignSelf: 'center', justifySelf: 'center' }} size={'large'}>
                            <LinkedInIcon sx={{ fontSize: "35px" }} />
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