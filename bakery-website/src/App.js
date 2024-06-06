import React from 'react';
import { Box, AppBar, Toolbar, Typography, Divider, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid2 from '@mui/material/Unstable_Grid2'; // Ensure to use Grid2
import PizzaList from './PizzaList';
import QuickBitesList from './QuickBitesList';
import DinnerPlatesList from './DinnerPlatesList';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import DessertMenu from './DessertMenu';
import { useState, useEffect } from 'react';

// Create a dark theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000000',
            paper: '#1c1c1c',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
        primary: {
            main: '#ffffff',
        },
    },
    typography: {
        allVariants: {
            color: '#ffffff',
        },
    },
});

function App() {

    const [showDinnerMenu, setShowDinnerMenu] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowDinnerMenu((prevShowDinnerMenu) => !prevShowDinnerMenu);
        }, 30000); // 30 seconds interval

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: 'background.default' }}>
                <AppBar position="static" color="primary" sx={{ padding: '10px' }}>
                    <Toolbar sx={{ minHeight: '80px' }}>
                        <LocalPizzaIcon sx={{ marginRight: '10px', fontSize: '2.5rem' }} />
                        <Typography variant="h3" sx={{ flexGrow: 1, textAlign: 'center', color: 'text.primary' }}>
                            Welcome to Barton's Bakery! | Call to Order Ahead - 607-338-8635
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid2 container sx={{ flex: '1', padding: '20px', backgroundColor: 'background.default', alignItems: 'stretch'}}>
                    <Grid2 xs={12} md={5.85}>
                        <PizzaList />
                    </Grid2>
                    <Grid2 xs={0} md={.15} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'stretch' }}>
                        <Divider orientation="vertical" variant='middle' flexItem sx={{ borderWidth: '3px', borderColor: 'darkred' }} />
                    </Grid2>
                    <Grid2 xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <QuickBitesList />
                        <Divider variant='middle' sx={{ borderWidth: '3px', borderColor: 'darkred' }} />
                        {showDinnerMenu ? <DinnerPlatesList /> : <DessertMenu />}
                    </Grid2>
                </Grid2>
            </Box>
        </ThemeProvider>
    );
}

export default App;