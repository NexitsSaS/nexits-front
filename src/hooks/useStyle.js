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
        borderRadius: '25px',
        width: '50%'
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
    },
    borderTable: {
        border: '2px solid grey',
        borderRadius: '20px',
        marginLeft: '25px',
        padding: '0 !important'
    },
    tableCentered: {
        '& .css-18dtc19-MuiTable-root': {
            width: '95%',
            margin: '25px auto 0'
        }
    },
    removeRowColors: {
        backgroundColor: 'unset',
        color: '#616161'
    },
    border: {
        border: '2px solid grey'
    },
    addTeamButton: {
        fontWeight: 'bold',
        marginTop: '56px',
        color: '#c7c7c7',
        fontSize: '25px',
        marginLeft: '-20px',
        '& .css-gcc2o7-MuiButton-startIcon': {
            position: 'relative',
            top: '-35px',
            left: '90px'
        },
        '& .css-gcc2o7-MuiButton-startIcon>*:nth-of-type(1)': {
            fontSize: '40px'
        }
    }
}));
