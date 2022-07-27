import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useStyle } from 'hooks/useStyle';
import { Card, CardMedia, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60wv',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
};

export default function ChildModalDetailAssets({ name, title, image, description, ref, price, detail, children }) {
    const [open, setOpen] = React.useState(false);
    const [product, setProduct] = React.useState({});
    const [selectedDate, handleDateChange] = React.useState(new Date());
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const submitChange = () => setOpen(false);
    const handleChange = (event) => {
        setProduct((current) => ({ ...current, [event.target.label]: event.target.value }));
    };
    const classes = useStyle();
    return (
        <div>
            <Box onClick={handleOpen}>{children}</Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ borderRadius: '18px' }}
            >
                <Card sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton aria-label="delete" size="small" onClick={handleClose}>
                            <CancelIcon color="primary" fontSize="large" />
                        </IconButton>
                    </Box>
                    <Typography id="modal-modal-title" variant="h1" sx={{ mt: 2 }}>
                        {title || 'Product Details'}
                    </Typography>
                    <CardMedia
                        component="img"
                        sx={{ mt: 4, width: '370px', borderRadius: '10px', border: '2px solid grey' }}
                        image={
                            image ||
                            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80'
                        }
                        alt={title}
                        loading="lazy"
                    />
                    <Typography id="modal-modal-title" variant="h2" sx={{ mt: 2 }}>
                        {description || 'APPLE MacBook Air M1 8Go 256Go SSD - Silver (MGN93FN-A)'}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h3" sx={{ mt: 4 }}>
                        {ref || 'Référence MGN93FN-A'}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h1B" component="h1" sx={{ mt: 4 }}>
                        {price || '3 739,000 TND'}
                    </Typography>
                    <Typography id="modal-modal-title" variant="subtitle1" sx={{ mt: 2 }}>
                        {detail ||
                            'Écran 13" Retina LED IPS (2560 x 1600 pixels) - Processeur: Apple M1 (CPU 8 coeurs / GPU 7 coeurs / Neural Engine 16 coeurs) - Système d\'exploitation: MacOS - Mémoire RAM: 8 Go DDR4 - Disque Dur: 256 Go SSD - Carte Graphique: Intel HD Graphics avec Wi-Fi, Bluetooth, 2x Thunderbolt USB4/USBType-C, Prise Casque Jack 3.5mm - Capteur Touch ID, Clavier et trackpad Magic'}
                    </Typography>
                </Card>
            </Modal>
        </div>
    );
}
