import React from 'react';
import { Box, Typography } from '@mui/material';
import toppings from './toppings';

const ToppingsList = () => (
    <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', fontSize: 'calc(8px + 1vw)' }}>
            Toppings
        </Typography>
        <Typography variant="h4" sx={{ textAlign: 'center', fontSize: 'calc(9px + .75vw)' }}>
            {toppings.join(' • ')}
        </Typography>
    </Box>
);

export default ToppingsList;