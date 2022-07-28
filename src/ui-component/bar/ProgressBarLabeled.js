import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useStyle } from 'hooks/useStyle';

function LinearProgressWithLabel(props) {
    const classes = useStyle();
    return (
        <Box sx={{ alignItems: 'center' }}>
            <Box sx={{ minWidth: 35, textAlign: 'right' }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
            </Box>
            <Box sx={{ width: '100%', mr: 1 }} className={classes.barThickness}>
                <LinearProgress variant="determinate" color="primary" {...props} />
            </Box>
        </Box>
    );
}

export default function LinearWithValueLabel() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {}, []);

    return (
        <Box sx={{ width: '80%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}
