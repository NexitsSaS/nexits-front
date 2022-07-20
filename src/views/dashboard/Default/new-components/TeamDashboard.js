import { useEffect, useState } from 'react';

// material-ui
import { Button, Grid, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
import Newboxcharts from './NewBoxCharts';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from '../TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import TitleAndText from './TitleAndText';
import OrderMiniLeftCard from './OrderMiniLeftCard';
import TopBuyCard from './TopBuyCard';
import TeamCardPreview from './TeamCardPreview';
import styled from '@emotion/styled';
import { useStyle } from 'hooks/useStyle';
import classNames from 'classnames';

// ==============================|| DEFAULT TeamDashboard ||============================== //

//---------- Styled Componenet --------------//
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));
//-------------Data construction ------------//
function createData(name, members) {
    return { name, members };
}
const teams = [
    createData('Web development Mobil', 100),
    createData('Création logiciels', 255),
    createData('UI/UX Design', 6),
    createData('Référencement SEO / SMO', 126),
    createData('Développement Web Mobile', 13)
];
function createTeam(user, order, budget, orderStatus) {
    return { user, order, budget, orderStatus };
}

const TeamsRows = [
    createTeam('Mohamed Fellah', 55, '22%', 'completed'),
    createTeam('Mounir Atia', 2, '66%', 'pending'),
    createTeam('Salma Manaii', 22, '25%', 'pending'),
    createTeam('Bechi Ben Mahmoud', 5, '90%', 'canceled'),
    createTeam('Fatma Ben Mbarek', 1, '2%', 'canceled')
];
const TeamDashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    const headerTableTeam = Object.keys(TeamsRows[0]);
    const classes = useStyle();
    return (
        <Grid container spacing={gridSpacing}>
            {/* {middle/main side } */}
            <Grid item xs={9}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <Newboxcharts title={'total user'} isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <Newboxcharts title={'total spent'} isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <Newboxcharts title={'orders placed'} isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <Newboxcharts title={'total licenses'} isLoading={isLoading} />
                    </Grid>
                </Grid>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={'100%'} mt={'2rem'}>
                        <TitleAndText title="Teams Category" relatedInfo="this part is mainly the dashboard for the teams" />
                    </Grid>
                    <Grid container xs={12} md={'100%'} mt={'2rem'} spacing={2} ml={0}>
                        {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
                        {/* team main cards */}
                        {teams.map((team) => (
                            <Grid item xs={4} md={'100%'}>
                                <TeamCardPreview team={`${team.members} members`} name={team.name} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={'100%'} mt={'2rem'}>
                        <TitleAndText title="All teams" relatedInfo="200 Member" />
                    </Grid>
                    <Grid item xs={12} md={'100%'} mt={'2rem'} className={classes.borderTable}>
                        {/* table content for multiple team views */}
                        <TableContainer component={Paper} className={classNames(classes.tableCentered, classes.removeRowColors)}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        {headerTableTeam.map((head) => (
                                            <StyledTableCell align="center">{head}</StyledTableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {TeamsRows.map((row, i) => (
                                        <StyledTableRow key={row.name}>
                                            {headerTableTeam.map((head) =>
                                                head == 'orderStatus' ? (
                                                    <StyledTableCell align="center">
                                                        <Button
                                                            className={classNames(
                                                                classes.buttonStatus,
                                                                classes.buttonStatus && row[head] == 'pending'
                                                                    ? classes.pending
                                                                    : row[head] == 'completed'
                                                                    ? classes.completed
                                                                    : classes.canceled
                                                            )}
                                                            variant="contained"
                                                            startIcon={
                                                                row[head] == 'pending' ? (
                                                                    <AccessTimeIcon />
                                                                ) : row[head] == 'completed' ? (
                                                                    <CheckIcon />
                                                                ) : (
                                                                    <CloseIcon />
                                                                )
                                                            }
                                                        >
                                                            {row[head]}
                                                        </Button>
                                                    </StyledTableCell>
                                                ) : (
                                                    <StyledTableCell align="center">{row[head]}</StyledTableCell>
                                                )
                                            )}
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
            {/* {left side } */}

            <Grid item xs={3}>
                {/* the information component */}
                <Grid container spacing={gridSpacing}>
                    {/* approved component */}
                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        <TitleAndText title={'Approved'} relatedInfo={'5 demande en cours'} />
                    </Grid>

                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        {/* order miniLeftCardComponenet */}
                        <OrderMiniLeftCard />
                    </Grid>
                    {/* top buyer component */}
                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        <TitleAndText title={'Top Buyer'} relatedInfo={'5 demande en cours'} />
                    </Grid>
                    <Grid item lg={12} md={6} sm={6} xs={12}>
                        {/* order miniLeftCardComponenet */}
                        <TopBuyCard />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TeamDashboard;
