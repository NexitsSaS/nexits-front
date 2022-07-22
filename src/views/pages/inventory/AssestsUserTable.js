import useTable, { Input } from 'ui-component/table/useTable';
import { TableBody, TableCell, TableRow, Toolbar, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const headCells = [
    {
        id: 'user',
        label: 'User'
    },
    {
        id: 'email',
        label: 'Email'
    },
    {
        id: 'originalCost',
        label: 'Total original'
    },
    {
        id: 'currentCost',
        label: 'Total Current'
    },
    {
        id: 'action',
        label: 'Action'
    }
];

const AssetsUserTable = () => {
    const [data, setData] = useState([]);
    const [filterFn, setFilterFn] = useState({
        fn: (items) => {
            return items;
        }
    });
    useEffect(() => {
        fetch('http://localhost:4000/assets')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, []);

    const { TableContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(data, headCells, filterFn);

    const handleSearch = (e) => {
        let target = e.target;
        setFilterFn({
            fn: (items) => {
                if (target.value === '') return items;
                else return items.filter((x) => x.user.toLowerCase().includes(target.value));
            }
        });
    };

    const handleSelectChange = (e) => {
        setTeam(e.target.value);
    };
    return (
        <div>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>User Assets Management</h1>
                <Input sx={{ width: '50%' }} onChange={handleSearch} label="search order" />
                <Input onChange={handleSelectChange} select value="all">
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="Web Dev Mobile">Web Dev Mobile</MenuItem>
                    <MenuItem value="UX/UI">UX/UI</MenuItem>
                </Input>
            </Toolbar>
            <Box sx={{ border: '2px solid #CECECE', borderRadius: '16px', padding: '5px 25px' }}>
                <TableContainer>
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((order) => (
                            <TableRow key={order.id}>
                                {headCells.map((headerCell) =>
                                    headerCell.id === 'action' ? (
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    width: '60%',
                                                    borderRadius: '24px',
                                                    textAlign: 'center',
                                                    fontSize: 18,
                                                    color: 'blue'
                                                }}
                                            >
                                                <MoreHorizIcon />
                                            </Box>
                                        </TableCell>
                                    ) : (
                                        <TableCell>{order[headerCell.id]}</TableCell>
                                    )
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
                <TblPagination />
            </Box>
        </div>
    );
};

export default AssetsUserTable;
