import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const dinnerPlatesItems = [
    { name: 'BBQ Sammy', description: 'Pulled pork BBQ Sammy, two sides, and a soft roll.', price: '$9.99' },
    { name: 'Double Dog Dare', description: 'When has one Hot Dog ever been enough? Double it up and get two Hot Dogs, two sides, and a soft roll. Your choice of Hot Dog toppings.', price: '$9.99' }
];

const dinnerPlatesDescription = "Headin' home for dinner? We got y'all covered. Check out our selection of dinner plates. Dinner plates come with two sides and a soft roll.";

const DinnerPlatesList = () => (
    <Box sx={{ backgroundColor: 'background.paper', padding: '2vh', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '5px solid #C0392B', height: '100%' }}>
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
);

export default DinnerPlatesList;