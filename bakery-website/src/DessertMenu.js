import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import dessertItems from './DessertItems';
import dessertPhoto from './Images/CuteDesserts.png'

const dessertDescription = "Quick, order a dessert before the menu changes back!";

const dessertList = () => (
    <Box sx={{ backgroundColor: 'background.paper', padding: '2vh', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', height: '100%' }}>
        <Typography variant="h1" sx={{ marginBottom: '8px', fontWeight: 'bold', textDecoration: 'underline', fontSize: 'calc(32px + 1.5vw)' }}>
            Desserts!
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: '20px', fontSize: 'calc(8px + 1vw)' }}>
            {dessertDescription}
        </Typography>
        <List>
            {dessertItems.map((item, index) => (
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
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '1px' }}>
            <img src={dessertPhoto} alt="Cute Desserts" style={{ maxWidth: '25%', height: 'auto', borderRadius: '2px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
        </Box> 
    </Box>
);

export default dessertList;