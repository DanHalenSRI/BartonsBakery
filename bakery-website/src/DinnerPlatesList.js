import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import dinnerPlatesItems from './dinnerPlatesItems';
import DinnerSidesList from './DinnerSidesList';
import dinnerSidesPhoto from './Images/DoubleDog.png';

const dinnerPlatesDescription = "Headin' home for dinner? We got y'all covered. Check out our selection of dinner plates. Dinner plates come with two sides and a soft roll.";

const DinnerPlatesList = () => (
    <Box sx={{ backgroundColor: 'background.paper', padding: '2vh', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '5px solid #C0392B', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
            <Typography variant="h2" sx={{ marginBottom: '8px', fontWeight: 'bold', textDecoration: 'underline' }}>
                Dinner Plates
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                {dinnerPlatesDescription}
            </Typography>
            <List>
                {dinnerPlatesItems.map((item, index) => (
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