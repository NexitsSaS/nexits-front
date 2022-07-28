import { styled, TableCell, TextField, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material';
import Table from '@mui/material/Table';
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

// Table Styling
const StyledTable = styled(Table)({
    padding: '25px',
    '& thead': {
        backgroundColor: '#e3e1e2'
    },
    '& thead th': {
        fontWeight: '600',
        color: '#474747',
        border: 'none'
    },
    '& tbody td': {
        fontWeight: '300',
        border: 'none'
    },
    '& tbody tr:hover': {
        backgroundColor: '#fff',
        cursor: 'pointer'
    },
    '& th:nth-child(1)': {
        borderRadius: '10px 0px 0px 10px'
    },
    '& th:nth-last-child(1)': {
        borderRadius: '0px 10px 10px 0px'
    }
});

// Table Component
const useTable = (records, headCells, filterFn) => {
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
