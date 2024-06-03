import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const pizzaItems = [
    { name: 'Cheese', description: `Classic cheese pizza.  Safe choice if you forgot to ask what someone wanted.`, square: '$2.00', halfSheet: '$13.99' },
    { name: 'Pepperoni', description: `Your picky eater child called, they want pepperoni.`, square: '$2.25', halfSheet: '$15.99' },
    { name: 'Supreme Veggie', description: `We don't call it Supreme for nothin'.  Peppers, Onions, Olives, and Mushrooms.`, square: '$2.39', halfSheet: '$14.99' },
    { name: 'Hawaiian', description: `Ham and pineapple with mozzarella cheese.  It's ok we won't tell anyone.`, square: '$2.49', halfSheet: '$15.99' },
    { name: '3 Meat', description: `Pepperoni and Sausage wanted to spice things up and invited Bacon along for the ride.`, square: '$2.69', halfSheet: '$16.99' },
    { name: 'Chicken Bacon Ranch', description: `The Holy Trinity of toppings join forces to fight your hunger.`, square: '$2.59', halfSheet: '$16.99' },
    { name: 'Breakfast Pizza', description: `Eggs, sausage, and ol' fashioned sausage gravy.  Served from 8 - 10, or until we run out.  Missed your chance?  Call ahead next time!`, square: '$2.59', halfSheet: '$16.99' },
];

const pizzaDescription = "Ever see a square slice of pizza before? You have now. We also have 1/2 sheet rectangular pizzas made to order. Perfect for parties or just one really hungry person.";

const PizzaList = () => (
    <Box sx={{ backgroundColor: 'background.paper', padding: '2vh', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '5px solid #C0392B', height: '100%' }}>
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
    </Box>
);

export default PizzaList;