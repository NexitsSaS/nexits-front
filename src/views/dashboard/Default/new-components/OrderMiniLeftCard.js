import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ChartDataMonth from '../chart-data/total-order-month-line-chart';
// import Divider from '@mui/material/Divider';

const OrderMiniLeftCard = function ({
    team = 'Dev Team',
    name = 'Salma Fallah',
    miniDescription = 'Disque Dur Externe ADATA SD600Q 240Go SSD USB 3.2 - Noir',
    date = '14/06/2022'
}) {
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ border: '1px solid #B8B8B8', borderRadius: '12px' }}>
            <Grid container direction="row" sx={{ ml: 2 }}>
                <Typography sx={{ color: 'black', fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.25 }}>{name}</Typography>
            </Grid>
            <Grid container direction="row" sx={{ ml: 2 }}>
                <Typography sx={{ color: 'black', fontSize: '1rem', fontWeight: 300, mr: 1, mb: 0.75 }}>{team}</Typography>
            </Grid>
            <Grid container direction="column" sx={{ justifyContent: 'center', alignItems: 'flex-start', ml: 2, mb: 1.5 }}>
                <Typography sx={{ fontSize: '1 rem', fontWeight: 300, mr: 1, mt: 1.75, mb: 0.25 }}>last update at {date}</Typography>
                <Typography sx={{ color: 'black', fontSize: '1.4rem', fontWeight: 500, mr: 1, mb: 0.75, width: '75%' }}>
                    {miniDescription}
                </Typography>
            </Grid>
        </Box>
    );
};
export default OrderMiniLeftCard;
