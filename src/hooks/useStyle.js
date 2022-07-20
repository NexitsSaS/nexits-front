import makeStyles from '@mui/styles/makeStyles';

export const useStyle = makeStyles(() => ({
    barThickness: {
        '& .css-snzakf-MuiLinearProgress-root': {
            height: '8px',
            borderRadius: '5px',
            color: 'blue'
        }
    }
}));
