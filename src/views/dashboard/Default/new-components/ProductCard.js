import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardHeader, CardMedia, Typography, styled } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ProductImg from './Apple-MacBook.jpg';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import Switch from '@mui/material/Switch';
import { formatCurrency } from '../../../../utils/formatCurrency';

const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5
            }
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff'
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
        }
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500
        })
    }
}));


const ProductCard = () => {
    return (
        <Card sx={{ border: '2px solid #CECECE', maxWidth: 285, borderRadius: '16px', minHeight: 445 }}>
            <CardHeader
                sx={{ padding: '0.3rem' }}
                action={
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                }
            />
            <CardMedia component="img" height="185" image={ProductImg} alt="product_img" />
            <CardContent sx={{ paddingTop: '0.6rem' }}>
                <Typography sx={{ fontWeight: '600' }} component="div" variant="h5">
                    APPLE MACBOOK AIR M1 8GO 256 GO SSD - SILVER (MGN93FN-A)
                </Typography>
                <Typography sx={{ paddingTop: '0.5rem', fontWeight: '500' }} variant="body2" color="text.primary">
                    Ecran 13" Retina LED IPS (2560 x 1600 pixels) - Processeur: Apple M1 (CPU 8 coeurs / GPU 7 coeurs / Neural Engine 16
                    coeurs) -
                </Typography>

                <Box sx={{ paddingTop: '2rem', display: 'flex', justifyContent: 'space-between',  }}>
                    <Typography variant="h3" sx={{ fontWeight: '800' }}>
                        {formatCurrency(3739000)}
                    </Typography>
                    <Typography><IOSSwitch defaultChecked/></Typography>
                </Box>

            </CardContent>
        </Card>
    );
};
export default ProductCard;
