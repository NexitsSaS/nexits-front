import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
    Button,
    FormControl,
    FormGroup,
    FormLabel,
    TextField,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Typography,
    Box
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { DesktopDatePicker } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import UploadFileIcon from '@mui/icons-material/UploadFile';
const StyledFrom = styled(FormControl)({
    display: 'grid',
    gap: '32px',
    gridTemplateColumns: '25% 25%',
    '& label': {
        marginLeft: '0.7rem',
        color: 'black !important',
        fontSize: '1rem',
        fontWeight: '500',
        '& span': {
            color: 'GrayText',
            fontSize: '0.7rem',
            marginLeft: '0.7rem'
        }
    }
});

const CTextInput = ({ label, optional = false, value, id, placeholder }) => {
    return (
        <FormGroup>
            <FormLabel htmlFor={id}>
                {label}
                {optional && (
                    <span fontSize="0.5rem" color="GrayText !imporant">
                        Optional
                    </span>
                )}
            </FormLabel>
            <TextField placeholder={placeholder} id={id} value={value} />
        </FormGroup>
    );
};

const AddUserView = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [teams, setTeam] = useState(['UI/ UX', 'Web', 'I.T']);
    const [onboarding, setOnboarding] = useState(false);
    const [date, setDate] = useState();
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [details, setDetails] = useState(false);

    const handleAddDetails = () => {
        setDetails(!details);
    };

    return (
        <div style={{color:'black'}}>
            <h2>Quick add or Advanced add</h2>
            <h1>Add new user</h1>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            <StyledFrom>
                {details && (
                    <>
                        <CTextInput label="Name" value={name} id="name" optional />
                        <CTextInput label="Last Name" value={lastname} id="lastname" optional />{' '}
                    </>
                )}

                <CTextInput label="Email Adress" placeholder="Email@example.com" value={email} id="email" />

                {/* Team menuInput */}
                <FormGroup>
                    <FormLabel htmlFor="team">Team</FormLabel>
                    <Select>
                        {teams.map((team) => (
                            <MenuItem value={team}>{team}</MenuItem>
                        ))}
                    </Select>
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={onboarding}
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<CheckCircleOutlineIcon />}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 40
                                    }
                                }}
                            />
                        }
                        label={<Typography sx={{ color: 'black', fontSize: '18px' }}>Onboarding</Typography>}
                    />
                </FormGroup>

                <FormGroup>
                    <TextField placeholder="Enter Start Date" type="date" />
                </FormGroup>
                <Typography></Typography>
                <Typography
                    onClick={handleAddDetails}
                    sx={{ color: 'blue', textDecoration: 'underline', justifySelf: 'end', fontSize: '1rem', cursor: 'pointer' }}
                >
                    Add more details?
                </Typography>
                {details && (
                    <>
                        <CTextInput label="Adress" value={adress} id="adress" />
                        <CTextInput label="City" value={city} id="city" />
                        <CTextInput label="Zip Code" value={zip} id="zip" />
                        <CTextInput label="Phone Number" value={phone} id="phone" />
                    </>
                )}
            </StyledFrom>
            <Button
                sx={{
                    marginTop: '10px',
                    backgroundColor: '#0800ff',
                    fontSize: '16px',
                    padding: '8px 30px 8px 30px',
                    height: '46px',
                    borderRadius: '8px'
                }}
                variant="contained"
            >
                Invite
            </Button>
            <Box sx={{marginTop:'28px' ,padding: '2rem', border: '2px solid #F5F5F5', width: '53%', borderRadius: '8px' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        fontSize:'1.3rem',
                        color:'black',
                        
                    }}
                >
                    <UploadFileIcon />
                    <span style={{marginLeft:'.5rem'}}>import file</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam officia fuga esse natus? Incidunt expedita aut quae iusto, nemo voluptatem!</p>
                <Button
                sx={{
                    marginTop: '10px',
                    backgroundColor: '#0800ff',
                    fontSize: '16px',
                    padding: '8px 30px 8px 30px',
                    height: '46px',
                    borderRadius: '8px'
                }}
                variant="contained"
            >
                Import
            </Button>
            </Box>
        </div>
    );
};
export default AddUserView;
