import { Circle } from '@mui/icons-material';
import makeStyles from '@mui/styles/makeStyles';

export const useStyle = makeStyles(() => ({
    barThickness: {
        '& .css-snzakf-MuiLinearProgress-root': {
            height: '8px',
            borderRadius: '5px',
            color: 'blue'
        }
    },
    overlayImage: {
        width: '2rem',
        height: '2rem',
        marginLeft: '-1rem',
        borderRadius: '1rem'
    },
    circularDiv: {
        display: 'inline',
        width: '2rem',
        height: '2rem',
        marginLeft: '-1rem',
        borderRadius: '1rem',
        backgroundColor: '#1565c0',
        padding: '0.45rem',
        color: 'white'
    }
}));
