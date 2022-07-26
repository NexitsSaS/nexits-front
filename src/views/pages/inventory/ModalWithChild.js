import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MenuItem, Select, TextField } from '@mui/material';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useStyle } from 'hooks/useStyle';
import MaterialUIPickers from './DatePicker';

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

export default function ChildModal({ name, children }) {
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
            <Box onClick={handleOpen} className={classes.addProduct}>
                {children}
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ borderRadius: '18px' }}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h2" component="h2">
                        Insert Product
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <TextField variant="outlined" sx={{ mt: 2, width: '100%' }} label="product name" />
                    <Box sx={{ mt: 2 }}>
                        <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            value={product.type}
                            label="type"
                            variant="outlined"
                            onChange={handleChange}
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value={10}>Bought</MenuItem>
                            <MenuItem value={20}>Rented</MenuItem>
                            <MenuItem value={30}>Leasing</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ mt: 2 }} className={classes.inputWidth}>
                        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="outlined" label="Current Value" />
                        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="outlined" label="Current Value" />
                        {/* <Input type="number" id="modal-modal-description" onChange={handleChange} label />
                        <Input type="number" id="modal-modal-description" onChange={handleChange} sx={{ width: '48%' }} /> */}
                    </Box>
                    {/* <Box sx={{ mt: 2 }}></Box> */}
                    <Box className={classes.inputWidth}>
                        <MaterialUIPickers />
                        <TextField
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            variant="outlined"
                            label="Depreciation"
                            sx={{ width: '48%' }}
                        />
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
