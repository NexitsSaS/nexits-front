import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LinearWithValueLabel from 'ui-component/bar/ProgressBarLabeled';
// import Divider from '@mui/material/Divider';

const TopBuyCard = function ({ team = 'UX UI designer', name = 'Mohamed Fellah' }) {
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ border: '1px solid #B8B8B8', borderRadius: '12px' }}>
            <Grid container direction="row" sx={{ ml: 2 }}>
                <Typography sx={{ color: 'black', fontSize: '1.75rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.25 }}>{name}</Typography>
            </Grid>
            <Grid container direction="row" sx={{ ml: 2 }}>
                <Typography sx={{ color: 'black', fontSize: '1rem', fontWeight: 300, mr: 1, mb: 0.75 }}>{team}</Typography>
            </Grid>
            <Grid container direction="column" sx={{ justifyContent: 'center', alignItems: 'flex-start', ml: 2, mb: 1.5 }}>
                <LinearWithValueLabel />
            </Grid>
        </Box>
    );
};
export default TopBuyCard;
