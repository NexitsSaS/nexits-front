import { styled, TableCell, TextField, TableHead, TablePagination, TableRow, TableSortLabel, OutlinedInput, InputAdornment, ButtonBase } from '@mui/material';
import Table from '@mui/material/Table';
import { Box } from '@mui/system';
import { IconAdjustmentsHorizontal, IconSearch } from '@tabler/icons';
import { useState } from 'react';

export function Input(props) {
    const { name, label, value, error = null, onChange, ...other } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    );
}

const OutlineInputStyle = styled(OutlinedInput)({
    width: 434,
    paddingLeft: 16,
    paddingRight: 16,
    '& input': {
        background: 'transparent !important',
        paddingLeft: '4px !important' // Great Library btw :'D
    }
});

export const SearchInput = (props) => {
    const { name, label, value, error = null, onChange, ...other } = props;
    return (
        <Box>
            <OutlineInputStyle
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...other}
                {...(error && { error: true, helperText: error })}
                id="input-search-header"
                startAdornment={<InputAdornment position='start'>
                    <IconSearch stroke={1.5} size='1rem' color='grey' />
                </InputAdornment>}
                endAdornment={
                    <InputAdornment position='end'>
                        <ButtonBase sx={{color: 'blue',padding:'0.3rem', borderRadius:'6px' , background: '#eff1ff'}}>
                        <IconAdjustmentsHorizontal   stroke={1.5} size='1.3rem' />

                        </ButtonBase>
                    </InputAdornment>
                }
            />
        </Box>
    );
};

// Table Styling
const StyledTable = styled(Table)({
    marginTop: '3',
    '& thead th': {
        fontWeigth: '600',
        color: 'darkslategray'
    },
    '& tbody td': {
        fontWeigth: '300'
    },
    '& tbody tr:hover': {
        backgroundColor: '#fff',
        cursor: 'pointer'
    }
});

// Table Component
const useTable = (records, headCells, filterFn,) => {
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();

    const TableContainer = (props) => <StyledTable>{props.children}</StyledTable>;
    const TblHead = (props) => {
        const handleSortRequest = (cellId) => {
            const isAsc = orderBy === cellId && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(cellId);
        };
        return (
            <TableHead>
                <TableRow>
                    {headCells.map((headCell) => (
                        <TableCell key={headCell.id}>
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={() => {
                                    handleSortRequest(headCell.id);
                                }}
                            >
                                {headCell.label}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    };
    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };
    const TblPagination = () => (
        <TablePagination
            next
            page={page}
            component="div"
            rowsPerPageOptions={pages}
            count={records.length}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            onPageChange={handleChangePage}
        />
    );

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records), getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    };
    return { TableContainer, TblHead, TblPagination, recordsAfterPagingAndSorting };
};

export default useTable;
