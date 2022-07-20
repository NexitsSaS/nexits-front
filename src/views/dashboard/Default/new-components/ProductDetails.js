import React from 'react';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export default function ProductDetails() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const specs = [
        'Processeur : i5-11400H (Hexa-Core 2.2 GHz - 2.7 GHz / 4.5 GHz Turbo - 12 Threads - Cache 12 Mo',
        'Ecran : 15.6 FHD IPS 144Hz',
        'Ram : 16 GB RAM 3200MHz',
        'Carte graphique : RTX 3060P 6GB',
        'Stockage : NVMe PCIe de 512 GB',
        'Windows 11'
    ];
const desc=[
    "- Processeur Intel Core i5-11400H (Hexa-Core 2.2 GHz - 2.7 GHz / 4.5 GHz Turbo - 12 Threads - Cache 12 Mo)",
    "- 16 GBde mémoire DDR4 (8GBx2) 3200MHz", "- Ecran de 15.6 pouces avec résolution Full HD (1920 x 1080) et fréquence de 144 Hz",
    "- Puce graphique NVIDIA"
]
    return (
        <>
            <Grid sx={{ p: 1, mb: 3 }}>
                <ArrowCircleLeftIcon
                    onClick={() => {
                        history('/dashboard/mainstats');
                    }}
                    sx={{ color: 'blue', fontSize: 40, mb: 1, cursor: 'pointer' }}
                />
                <Typography sx={{ fontSize: '1rem' }}>historique pack design</Typography>
                <Typography sx={{ color: 'blue', mt: 1 }}>500 order</Typography>
            </Grid>
            <Grid container direction="row" sx={{ alignItems: 'center' }}>
                <Grid container sx={{ height: '40vh', width: '50rem', alignItems: 'center' }}>
                    <Grid sx={{ height: '100%', width: '50%' }}>
                        <CardMedia
                            image={
                                'https://www.tunisianet.com.tn/237642-large/pc-portable-lenovo-ideapad-3-15igl05-dual-core-4-go-bleu.jpg'
                            } // require image
                            title="pc"
                            sx={{ height: '20rem', width: '23rem' }} // specify styles
                        />
                    </Grid>
                    <Grid container direction="column" sx={{ p:1,height: '100%', width: '50%', justifyContent: 'flex-start' }}>
                        <Typography sx={{ mb: 1, color: 'blue' }}>Référence MGN93FN-A</Typography>
                        <Typography sx={{ mb: 1, color: 'black' }}>3 739,000 TND</Typography>
                        <Typography sx={{ mb: 1, color: 'black', fontSize: 20 }}>
                            GIGABYTE G5 KD | 15.6" 144HZ | i5-11400H | RTX 3060P | 16GB
                        </Typography>
                        {specs.map((item, i) => {
                            return <Typography key={i}>{item}</Typography>;
                        })}
                    </Grid>
                </Grid>
                <Grid sx={{ border: '0.5px solid grey', height: '40vh' }}></Grid>
                <Grid sx={{ ml:3, mt: 2, height: '40vh', width: '30rem' }}>
                    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange}>
                        <ToggleButton value="web">Description</ToggleButton>
                        <ToggleButton value="android">Fiche Technique</ToggleButton>
                    </ToggleButtonGroup>
                    {desc.map((item, i) => {
                            return <Typography sx={{p:1}} key={i}>{item}</Typography>;
                        })}
                </Grid>
            </Grid>
            <Grid></Grid>
        </>
    );
}
