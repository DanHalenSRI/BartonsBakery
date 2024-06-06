import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import dessertItems from './DessertItems';

const dessertDescription = "Quick, order a dessert before the menu changes back!";

const dessertList = () => (
    <Box sx={{ backgroundColor: 'background.paper', padding: '2vh', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', height: '100%' }}>
        <Typography variant="h2" sx={{ marginBottom: '8px', fontWeight: 'bold', textDecoration: 'underline' }}>
            Desserts!
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            {dessertDescription}
        </Typography>
        <List>
            {dessertItems.map((item, index) => (
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

export default dessertList;