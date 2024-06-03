import React from 'react';
import { Box, AppBar, Toolbar, Typography, Grid, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PizzaList from './PizzaList';
import QuickBitesList from './QuickBitesList';
import DinnerPlatesList from './DinnerPlatesList';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

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
                <Grid container spacing={2} sx={{ flex: '1', padding: '20px', backgroundColor: 'background.default' }}>
                    <Grid item xs={12} md={6}>
                        <PizzaList />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <QuickBitesList />
                        <DinnerPlatesList />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default App;