import useTable, { Input } from './useTable';
import { TableBody, TableCell, TableRow, Toolbar, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import TeamCategoryCard from './TeamCategoryCard';
import { Box } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
const headCells = [
    {
        id: 'user',
        label: 'User'
    },
    {
        id: 'order',
        label: 'Order'
    },
    {
        id: 'lastupdate',
        label: 'Last Update'
    },
    {
        id: 'budget',
        label: 'Budget'
    },
    {
        id: 'status',
        label: 'Status'
    }
];

const Team = () => {
    const [team, setTeam] = useState('');
    const [data, setData] = useState([]);
    const [filterFn, setFilterFn] = useState({
        fn: (items) => {
            return item
        }
    });
    useEffect(() => {
        fetch('http://localhost:4001/orders')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, []);

    const { TableContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =  useTable(data, headCells, filterFn);

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

    const statusColors = {
        cancelled: '#001183',
        pending: '#1C3AFF',
        completed: '#A8B4FF'
    };

    const statusIcons = {
        pending: <AccessTimeIcon />,
        cancelled: <CloseIcon />,
        completed: <DoneIcon />
    };

    return (
        <div>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <TeamCategoryCard />
            <TeamCategoryCard />
            <TeamCategoryCard />
            <TeamCategoryCard />
            <TeamCategoryCard />
            <TeamCategoryCard />

            </Box>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>{team} Team</h1>
                <Input sx={{ width: '50%' }} onChange={handleSearch} label="search order" />
                <Input onChange={handleSelectChange} select value="all">
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="Web Dev Mobile">Web Dev Mobile</MenuItem>
                    <MenuItem value="UX/UI">UX/UI</MenuItem>
                </Input>
            </Toolbar>
            <Box sx={{ border: '2px solid #CECECE', borderRadius: '16px' }}>
                <TableContainer>
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.user}</TableCell>
                                <TableCell>{order.order}</TableCell>
                                <TableCell>{order.lastupdate}</TableCell>
                                <TableCell>{order.budget}</TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            width: '80%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-evenly',
                                            borderRadius: '24px',
                                            fontSize: 18,
                                            padding: 1,
                                            backgroundColor: statusColors[order.status],
                                            color: '#fff'
                                        }}
                                    >
                                        {statusIcons[order.status]}
                                        {order.status}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
                <TblPagination />
            </Box>
        </div>
    );
};

export default Team;
