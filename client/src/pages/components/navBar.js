import { Link, Outlet } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Container, Grid, Menu, MenuItem, Paper, Toolbar, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const pages = ["About Me", "Where I've Been", "Where I'm Going"];

const NavBar = () => {
    return (
        <>
            {/* <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar> */}
            <div className="navBar">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={4}>
                            <Link to="/history">About Me</Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/history">History</Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/history">Future</Link>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;