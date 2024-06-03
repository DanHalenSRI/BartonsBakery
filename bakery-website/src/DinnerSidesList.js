import React from 'react';
import { Box, Typography } from '@mui/material';
import dinnerSides from './dinnerSides';

const DinnerSidesList = () => (
    <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>
            Dinner Sides
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
            {dinnerSides.join(' • ')}
        </Typography>
    </Box>
);

export default DinnerSidesList;