import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from 'ui-component/table/useTable';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80wv',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

export default function BasicModal({ name }) {
    const [open, setOpen] = React.useState(false);
    const [product, setProduct] = React.useState({});
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const submitChange = () => setOpen(false);
    const handleChange = (event) => {
        setProduct((current) => ({ ...current, [event.target.label]: event.target.value }));
    };

    return (
        <div>
            <Box onClick={handleOpen}>{name}</Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h2" component="h2">
                        Insert Product
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <TextField variant="outlined" sx={{ mt: 2 }} label="product name" />
                    <Box sx={{ mt: 2 }}>
                        <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            value={product.type}
                            label="type"
                            variant="outlined"
                            onChange={handleChange}
                            sx={{ mt: 2, width: '100%' }}
                        >
                            <MenuItem value={10}>Bought</MenuItem>
                            <MenuItem value={20}>Rented</MenuItem>
                            <MenuItem value={30}>Leasing</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Input type="number" id="modal-modal-description" onChange={handleChange} sx={{ width: '48%', mr: '15px' }} />
                        <Input type="number" id="modal-modal-description" onChange={handleChange} sx={{ width: '48%' }} />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Input type="upload" id="modal-modal-description" onChange={handleChange} />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Input type="number" id="modal-modal-description" onChange={handleChange} />
                        <Input type="number" id="modal-modal-description" onChange={handleChange} />
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <Button onClick={handleClose} variant="outlined" sx={{ mr: '15px' }}>
                            Cancel
                        </Button>
                        <Button onClick={submitChange} variant="contained">
                            Add Product
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
