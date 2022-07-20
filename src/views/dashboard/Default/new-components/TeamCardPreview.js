import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import StackedImages from './ThumbnailImages';
// import Divider from '@mui/material/Divider';

const TeamCardPreview = function ({ team, name }) {
    const [open, setOpen] = React.useState(false);
    //     const extraMargin = name.length > 19 ? 0.25 : 4.9;
    console.log(name.length > 19);
    return (
        <Box sx={{ border: '1px solid #B8B8B8', borderRadius: '12px' }}>
            <Grid container direction="row" sx={{ ml: 2 }}>
                <Typography sx={{ color: 'black', fontSize: '1.75rem', fontWeight: 500, mr: 1, mt: 1.75 }}>{name}</Typography>
            </Grid>
            <Grid container direction="row" sx={{ ml: 2 }}>
                <Typography sx={{ color: 'blue', fontSize: '1rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.25 }}>{team}</Typography>
            </Grid>
            <Grid container direction="column" sx={{ justifyContent: 'center', alignItems: 'flex-start', ml: 2, mb: 1.5 }}>
                {/* stacked preview images thumbnails */}
                <StackedImages />
            </Grid>
        </Box>
    );
};
export default TeamCardPreview;
