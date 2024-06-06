import React from 'react';
import { Box, Typography } from '@mui/material';
import dinnerSides from './dinnerSides';

const DinnerSidesList = () => (
    <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', fontSize: 'calc(8px + 1vw)' }}>
            Dinner Sides
        </Typography>
        <Typography variant="h4" sx={{ textAlign: 'center', fontSize: 'calc(9px + .75vw)' }}>
            {dinnerSides.join(' • ')}
        </Typography>
    </Box>
);

export default DinnerSidesList;