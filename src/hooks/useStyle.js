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
    },
    buttonStatus: {
        borderRadius: '20px',
        width: '40%'
    },
    completed: {
        color: '#1c3aff',
        backgroundColor: '#dfe5ff'
    },
    pending: {
        color: '#dfe5ff',
        backgroundColor: '#1c3aff'
    },
    canceled: {
        color: '#dfe5ff',
        backgroundColor: '#001283'
    }
}));
