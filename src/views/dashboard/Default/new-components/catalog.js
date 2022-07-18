import React from 'react';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import SearchSection from '../../../../layout/MainLayout/Header/SearchSection/index';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Catalog() {
    const data = [
        {
            albumId: 1,
            id: 1,
            title: 'accusamus beatae ad facilis cum similique qui sunt',
            url: 'https://www.tunisianet.com.tn/237642-large/pc-portable-lenovo-ideapad-3-15igl05-dual-core-4-go-bleu.jpg',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952'
        },
        {
            albumId: 1,
            id: 2,
            title: 'reprehenderit est deserunt velit ipsam',
            url: 'https://www.tunisianet.com.tn/img/cms/Nouveau%20dossier/samsung/lenovo-laptops-ideapad-5-14-intel-feature-2.jpg',
            thumbnailUrl: 'https://via.placeholder.com/150/771796'
        },
        {
            albumId: 1,
            id: 3,
            title: 'officia porro iure quia iusto qui ipsa ut modi',
            url: 'https://www.tunisianet.com.tn/img/cms/Nouveau%20dossier/samsung/lenovo-laptops-ideapad-5-14-intel-feature-2.jpg',
            thumbnailUrl: 'https://via.placeholder.com/150/24f355'
        },
        {
            albumId: 1,
            id: 4,
            title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
            url: 'https://www.tunisianet.com.tn/img/cms/Nouveau%20dossier/samsung/lenovo-laptops-ideapad-5-14-intel-feature-2.jpg',
            thumbnailUrl: 'https://via.placeholder.com/150/d32776'
        },
        {
            albumId: 1,
            id: 5,
            title: 'natus nisi omnis corporis facere molestiae rerum in',
            url: 'https://www.tunisianet.com.tn/img/cms/Nouveau%20dossier/samsung/lenovo-laptops-ideapad-5-14-intel-feature-2.jpg',
            thumbnailUrl: 'https://via.placeholder.com/150/f66b97'
        },
        {
            albumId: 1,
            id: 6,
            title: 'accusamus ea aliquid et amet sequi nemo',
            url: 'https://www.tunisianet.com.tn/img/cms/Nouveau%20dossier/samsung/lenovo-laptops-ideapad-5-14-intel-feature-2.jpg',
            thumbnailUrl: 'https://via.placeholder.com/150/56a8c2'
        },
        {
            albumId: 1,
            id: 6,
            title: 'accusamus ea aliquid et amet sequi nemo',
            url: 'https://www.tunisianet.com.tn/img/cms/Nouveau%20dossier/samsung/lenovo-laptops-ideapad-5-14-intel-feature-2.jpg',
            thumbnailUrl: 'https://via.placeholder.com/150/56a8c2'
        },
        {
            albumId: 1,
            id: 6,
            title: 'accusamus ea aliquid et amet sequi nemo',
            url: 'https://www.tunisianet.com.tn/img/cms/Nouveau%20dossier/samsung/lenovo-laptops-ideapad-5-14-intel-feature-2.jpg',
            thumbnailUrl: 'https://via.placeholder.com/150/56a8c2'
        }
    ];

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
                    backgroundColor: theme.palette.mode === 'dark' ? '#0238e8' : '#0238e8',
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

    return (
        <>
            <Grid container direction="row" sx={{p:3,ml:2,mb:2}}>
                <SearchSection />
                <Button variant="contained" sx={{borderRadius:"10px",ml:5,backgroundColor:"#0238e8"}}>new catalog</Button>
            </Grid>
            <Grid container direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
                {data.map((item, i) => {
                    return (
                        <Card key={i} sx={{ maxWidth: 300, border: '0.5px solid grey', borderRadius: '10px', margin: '5px 0.6rem ' }}>
                            <Grid container direction="row-reverse">
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            </Grid>

                            <CardMedia component="img" sx={{maxHeight:300,cursor:"pointer"}} image={item.url} alt="" />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests
                                </Typography>
                                <Grid
                                    container
                                    direction="row"
                                    sx={{ justifyContent: 'space-between', marginTop: '15px', alignItems: 'center' }}
                                >
                                    <Typography sx={{ fontSize: '1.7rem' }}>3,000,000 TND</Typography>
                                    <FormControlLabel control={<IOSSwitch sx={{ m: 0 }} defaultChecked />} label="" />
                                </Grid>
                            </CardContent>
                        </Card>
                    );
                })}
            </Grid>
        </>
    );
}
