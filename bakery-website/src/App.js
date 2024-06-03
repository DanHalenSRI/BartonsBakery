import React from 'react';
import { Container, AppBar, Toolbar, Typography, Box, List, ListItem, ListItemText, Grid } from '@mui/material';

const pizzaItems = [
    { name: 'Cheese', description: `Classic cheese pizza.  Safe choice if you forgot to ask what someone wanted.`, square: '$2.00', halfSheet: '$13.99' },
    { name: 'Pepperoni', description: `Your picky eater child called, they want pepperoni.`, square: '$2.25', halfSheet: '$15.99' },
    { name: 'Supreme Veggie', description: `We dont call it Supreme for nothin'.  Peppers, Onions, Olives, and Mushrooms.`, square: '$2.39', halfSheet: '$14.99' },
    { name: 'Hawaiian', description: `Ham and pineapple with mozzarella cheese.  Its ok we wont tell anyone.`, square: '$2.49', halfSheet: '$15.99' },
    { name: '3 Meat', description: `Pepperoni and Sausage wanted to spice things up and invited Bacon along for the ride.`, square: '$2.69', halfSheet: '$16.99' },
    { name: 'Chicken Bacon Ranch', description: `The Holy Trinity of toppings join forces to fight your hunger.`, square: '$2.59', halfSheet: '$16.99' },
    { name: 'Breakfast Pizza', description: `Eggs, sausage, and ol' fashioned sausage gravy.  Served from 8 - 10, or until we run out.  Missed your chance?  Call ahead next time!`, square: '$2.59', halfSheet: '$16.99' },
];

const quickBitesItems = [
    { name: 'BBQ Sammy', description: 'Pulled pork with BBQ sauce on a soft bun', price: '$3.50' },
    { name: 'Chicken Quesadilla', description: 'Grilled chicken and cheese in a flour tortilla', price: '2 / $5.00' },
    { name: 'Steak Quesadilla', description: 'Grilled steak and cheese in a flour tortilla', price: '2 / $10.00' },
    { name: 'Hot Dog (All the way baby)', description: 'Includes whatever you want.  If you dont want nothin thats your problem.', price: '$2.75' }
];

const dinnerPlatesItems = [
    { name: 'BBQ Sammy', description: `Pulled pork BBQ Sammy, two sides, and a soft roll.`, price: '$9.99' },
    { name: 'Double Dog Dare', description: `When has one Hot Dog ever been enough?  Double it up with two sides and a soft roll.  Your choice of Hot Dog toppings.`, price: '$9.99' }
];

const pizzaDescription = "Ever see a square slice of pizza before?  You have now.  We also have 1/2 sheet rectangluar pizzas made to order.  Perfect for parties or just one really hungry person.";
const quickBitesDescription = "Headin' to work and runnin' late?  We got y'all covered.  Check out our selection of quick bites.";
const dinnerPlatesDescription = "Headin' home for dinner?  We got y'all covered.  Check out our selection of dinner plates.  Dinner plates come with two sides and a soft roll";

function App() {
    return (
        <Container style={{ width: '1920px', height: '1080px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6">
                        Welcome to Our Bakery!
                    </Typography>
                </Toolbar>
            </AppBar>
            <main style={{ flex: '1', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '20px', padding: '20px', backgroundColor: '#ECF0F1' }}>
                <Box style={{ gridColumn: '1 / 2', gridRow: '1 / 3', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '5px solid #C0392B' }}>
                    <Typography variant="h4" color="textPrimary" style={{ marginBottom: '8px', fontWeight: 'bold', textDecoration: 'underline' }}>
                        Pizza
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ marginBottom: '20px' }}>
                        {pizzaDescription}
                    </Typography>
                    <List>
                        {pizzaItems.map((item, index) => (
                            <ListItem key={index} style={{ alignItems: 'flex-start', display: 'grid', gridTemplateColumns: '1fr auto', columnGap: '20px' }}>
                                <div>
                                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>{item.name}</Typography>
                                    <Typography variant="body2">{item.description}</Typography>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body2" style={{ fontWeight: 'bold' }}>Square: {item.square}</Typography>
                                    <Typography variant="body2" style={{ fontWeight: 'bold', marginLeft: '20px' }}>1/2 Sheet: {item.halfSheet}</Typography>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box style={{ gridColumn: '2 / 3', gridRow: '1 / 2', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '5px solid #C0392B' }}>
                    <Typography variant="h4" color="textPrimary" style={{ marginBottom: '8px', fontWeight: 'bold', textDecoration: 'underline' }}>
                        Quick Bites
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ marginBottom: '20px' }}>
                        {quickBitesDescription}
                    </Typography>
                    <List>
                        {quickBitesItems.map((item, index) => (
                            <ListItem key={index} style={{ alignItems: 'flex-start', display: 'grid', gridTemplateColumns: '1fr auto', columnGap: '20px' }}>
                                <div>
                                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>{item.name}</Typography>
                                    <Typography variant="body2">{item.description}</Typography>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body2" style={{ fontWeight: 'bold' }}>{item.price}</Typography>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box style={{ gridColumn: '2 / 3', gridRow: '2 / 3', backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: '5px solid #C0392B' }}>
                    <Typography variant="h4" color="textPrimary" style={{ marginBottom: '8px', fontWeight: 'bold', textDecoration: 'underline' }}>
                        Dinner Plates
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ marginBottom: '20px' }}>
                        {dinnerPlatesDescription}
                    </Typography>
                    <List>
                        {dinnerPlatesItems.map((item, index) => (
                            <ListItem key={index} style={{ alignItems: 'flex-start', display: 'grid', gridTemplateColumns: '1fr auto', columnGap: '20px' }}>
                                <div>
                                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>{item.name}</Typography>
                                    <Typography variant="body2">{item.description}</Typography>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body2" style={{ fontWeight: 'bold' }}>{item.price}</Typography>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </main>
        </Container>
    );
}

export default App;