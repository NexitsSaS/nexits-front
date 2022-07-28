import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#cfcfcf',
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

function createData(user, email, office, product, packs, admin, date) {
    return { user, email, office, product, packs, admin, date };
}

const rows = [
    createData('a user', 'test@mail.test', 'france', 5, 1, 'santori', '25/07/2022'),
    createData('a user', 'test@mail.test', 'france', 5, 1, 'santori', '25/07/2022'),
    createData('a user', 'test@mail.test', 'france', 5, 1, 'santori', '25/07/2022'),
    createData('a user', 'test@mail.test', 'france', 5, 1, 'santori', '25/07/2022'),
    createData('a user', 'test@mail.test', 'france', 5, 1, 'santori', '25/07/2022')
];

export default function Historypack({ table = rows }) {
    const history = useNavigate();
    const headerTable = Object.keys(table[0]);
    return (
        <>
            <Grid container direction="row" sx={{ p: 3, ml: 2, mb: 2 }}>
                <Typography variant="h1">{'History'}</Typography>
            </Grid>
            <Grid container direction="row" sx={{ p: 5, justifyContent: 'space-around', alignItems: 'center' }}>
                <Grid sx={{ p: 2 }}>
                    <ArrowCircleLeftIcon
                        onClick={() => {
                            history('/dashboard/mainstats');
                        }}
                        sx={{ color: 'blue', fontSize: 40, mb: 1, cursor: 'pointer' }}
                    />
                    <Typography sx={{ fontSize: '1rem' }}>historique pack design</Typography>
                    <Typography sx={{ color: 'blue', mt: 1 }}>500 order</Typography>
                </Grid>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%'
                    }}
                >
                    <TextField fullWidth label="search" id="fullWidth" />
                </Box>
            </Grid>
            <TableContainer component={Paper} sx={{ mt: 7 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {headerTable.map((head) => (
                                <StyledTableCell align="center">{head}</StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <StyledTableRow key={row.name}>
                                {headerTable.map((head) => (
                                    <StyledTableCell align="center">{row[head]}</StyledTableCell>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
