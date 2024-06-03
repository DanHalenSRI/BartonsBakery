import React from 'react';
import { Box, Typography } from '@mui/material';
import toppings from './toppings';

const ToppingsList = () => (
    <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>
            Toppings
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {toppings.join(' • ')}
        </Typography>
    </Box>
);

export default ToppingsList;