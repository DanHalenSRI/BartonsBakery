import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#C0392B', // Brick Red
        },
        secondary: {
            main: '#F5CBA7', // Warm Beige
        },
        background: {
            default: '#ECF0F1', // Light Gray
            paper: '#FFFFFF', // Paper background color
        },
        text: {
            primary: '#2C3E50', // Charcoal
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
