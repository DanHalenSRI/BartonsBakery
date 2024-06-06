import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import quickBitesItems from './quickBitesItems';

const quickBitesDescription = "Headin' to work and runnin' late? We got y'all covered. Check out our selection of quick bites.";

const QuickBitesList = () => (
    <Box sx={{ backgroundColor: 'background.paper', padding: '2vh', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', height: '100%' }}>
        <Typography variant="h1" sx={{ marginBottom: '8px', fontWeight: 'bold', textDecoration: 'underline', fontSize: 'calc(32px + 1.5vw)' }}>
            Quick Bites
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: '20px', fontSize: 'calc(8px + 1vw)' }}>
            {quickBitesDescription}
        </Typography>
        <List>
            {quickBitesItems.map((item, index) => (
                <ListItem key={index} sx={{ display: 'grid', gridTemplateColumns: '1fr auto', columnGap: '20px', paddingBottom: '1vh' }}>
                    <div>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: 'calc(16px + 1.25vw)' }}>{item.name}</Typography>
                        <Typography variant="h4" sx={{ fontSize: 'calc(9px + .75vw)' }}>{item.description}</Typography>
                    </div>
                    <div>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: 'calc(9px + .75vw)' }}>{item.price}</Typography>
                    </div>
                </ListItem>
            ))}
        </List>
    </Box>
);

export default QuickBitesList;