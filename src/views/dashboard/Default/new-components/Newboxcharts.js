import React from 'react';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import ChartDataMonth from '../chart-data/total-order-month-line-chart';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
// import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const Newboxcharts = function ({ title }) {
    const [open, setOpen] = React.useState(false);
    const [schartmonth, setschartmonth] = React.useState('january');
    const handleClick = () => {
        setOpen(!open);
    };

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return (
        <>
            <Box sx={{ border: '1px solid #B8B8B8', borderRadius: '12px' }}>
                <Grid container direction="row" sx={{ p: 1, justifyContent: 'space-around' }}>
                    <Typography sx={{ color: 'blue', fontSize: '3rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>200</Typography>
                    <Grid item xs={4}>
                        <Chart {...ChartDataMonth} />
                    </Grid>
                </Grid>
                <Grid container direction="column" sx={{ justifyContent: 'center', alignItems: 'flex-start', ml: 2 }}>
                    <Typography sx={{ fontSize: '1.8rem', fontWeight: 300, mr: 1, mt: 1.75, mb: 0.75 }}>{title}</Typography>
                    <Typography sx={{ fontSize: '1 rem', fontWeight: 300, mr: 1, mt: 1.75, mb: 0.75 }}>
                        deniere update a 17/04/2022
                    </Typography>
                </Grid>

                <Grid container direction="column" sx={{ justifyContent: 'flex-end', mt: 2 }}>
                    <List sx={{ borderTop: '1px solid grey', borderTopWidth: '100%', bgcolor: 'transparent' }} component="nav">
                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary={schartmonth} />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            {/* u can map the drop down list items here */}
                            {/* <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Starred" />
                                </ListItemButton>
                            </List>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Starred" />
                                </ListItemButton>
                            </List> */}
                            {months.map((month, i) => {
                                return (
                                    <List
                                        onClick={() => {
                                            setOpen(false);
                                            setschartmonth(month);
                                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                        }}
                                        key={i}
                                        component="div"
                                        disablePadding
                                    >
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary={month} />
                                        </ListItemButton>
                                    </List>
                                );
                            })}
                            {/* -------------------------------------------- */}
                        </Collapse>
                    </List>
                </Grid>
            </Box>
        </>
    );
};

export default Newboxcharts;
