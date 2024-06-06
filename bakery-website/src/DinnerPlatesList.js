import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import dinnerPlatesItems from './dinnerPlatesItems';
import DinnerSidesList from './DinnerSidesList';
import dinnerSidesPhoto from './Images/DoubleDog.png';

const dinnerPlatesDescription = "Headin' home for dinner? We got y'all covered. Check out our selection of dinner plates. Dinner plates come with two sides and a soft roll.";

const DinnerPlatesList = () => (
    <Box sx={{ backgroundColor: 'background.paper', padding: '2vh', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
            <Typography variant="h1" sx={{ marginBottom: '8px', fontWeight: 'bold', textDecoration: 'underline', fontSize: 'calc(32px + 1.5vw)' }}>
                Dinner Plates
            </Typography>
            <Typography variant="h3" sx={{ marginBottom: '20px', fontSize: 'calc(8px + 1vw)' }}>
                {dinnerPlatesDescription}
            </Typography>
            <List>
                {dinnerPlatesItems.map((item, index) => (
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
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <DinnerSidesList />
            </Box>
            <Box sx={{ flexShrink: 0, display: 'flex', justifyContent: 'right' }}>
                <img src={dinnerSidesPhoto} alt="Dinner Sides Photo" style={{ maxWidth: '25%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
        </Box>
    </Box>
);

export default DinnerPlatesList;