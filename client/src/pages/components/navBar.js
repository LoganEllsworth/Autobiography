import { Outlet } from 'react-router-dom';
import { AppBar, Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const pages = [
    { title: "Where I've Been", link: "/history" },
    { title: "Where I'm At", link: "/home" },
    { title: "Where I'm Going", link: "/future" },
]

const NavBar = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'primary', boxShadow: 'none' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <IconButton href={'/home'}><PersonIcon sx={{ display: { xs: 'none', md: 'flex' } }} /></IconButton>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent='end'>
                            {pages.map((page) => (
                                <Button
                                    href={page.link}
                                    key={page}
                                    sx={{ my: 2, mx: 4, color: 'white', display: 'block' }}
                                >
                                    {page.title}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    );
}

export default NavBar;