import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import quickBitesItems from './quickBitesItems';

const quickBitesDescription = "Headin' to work and runnin' late? We got y'all covered. Check out our selection of quick bites.";

const QuickBitesList = () => (
    <Box sx={{ backgroundColor: 'background.paper', padding: '2vh', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '5px solid #C0392B', height: '100%' }}>
        <Typography variant="h2" sx={{ marginBottom: '8px', fontWeight: 'bold', textDecoration: 'underline' }}>
            Quick Bites
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            {quickBitesDescription}
        </Typography>
        <List>
            {quickBitesItems.map((item, index) => (
                <ListItem key={index} sx={{ display: 'grid', gridTemplateColumns: '1fr auto', columnGap: '20px', paddingBottom: '1vh' }}>
                    <div>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                        <Typography variant="h6">{item.description}</Typography>
                    </div>
                    <div>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.price}</Typography>
                    </div>
                </ListItem>
            ))}
        </List>
    </Box>
);

export default QuickBitesList;