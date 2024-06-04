import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import ToppingsList from './ToppingsList';
import pizzaItems from './pizzaItems';

import photo2 from './Images/photo2.png';


const pizzaDescription = "Ever see a square slice of pizza before? You have now. We also have 1/2 sheet rectangular pizzas made to order. Perfect for parties or just one really hungry person.";

const PizzaList = () => (
    <Box sx={{ backgroundColor: 'background.paper', padding: '2vh', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '5px solid #C0392B', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
            <Typography variant="h2" sx={{ marginBottom: '8px', fontWeight: 'bold', textDecoration: 'underline' }}>
                Pizza
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                {pizzaDescription}
            </Typography>
            <List>
                {pizzaItems.map((item, index) => (
                    <ListItem key={index} sx={{ display: 'grid', gridTemplateColumns: '1fr auto', columnGap: '20px', paddingBottom: '1vh' }}>
                        <div>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                            <Typography variant="h6">{item.description}</Typography>
                        </div>
                        <div>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Square: {item.square}</Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginLeft: '20px' }}>1/2 Sheet: {item.halfSheet}</Typography>
                        </div>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '1px' }}>
                <img src={photo2} alt="Photo 2" style={{ maxWidth: '20%', height: 'auto', borderRadius: '2px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>

        </Box>
        <ToppingsList />
    </Box>
);

export default PizzaList;