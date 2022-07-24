import React from 'react';
import useTable, { SearchInput } from '../useTable';
import { TableBody, TableCell, TableRow, IconButton, Avatar, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AvatarImg from './user.jpg';
import ActionMenu from './ActionMenu';
import { Link } from 'react-router-dom';

const headCells = [
    {
        id: 'avatar'
    },
    {
        id: 'name',
        label: 'Name'
    },
    {
        id: 'lastname',
        label: 'Last Name'
    },
    {
        id: 'email',
        label: 'Email Address'
    },
    {
        id: 'team',
        label: 'Team'
    },
    {
        id: 'office',
        label: 'Office'
    },

    {
        id: 'startdate',
        label: 'Start Date'
    },
    {
        id: 'lastactivity',
        label: 'Last Activity'
    },
    {
        id: ''
        // label:''
    }
];

const AllUsersPage = () => {
    const [users, setUsers] = useState([]);
    const [settingsMenu, setSettingsMenu] = useState(false);
    const [filterFn, setFilterFn] = useState({
        fn: (items) => {
            return items;
        }
    });

    useEffect(() => {
        fetch('http://localhost:4001/users')
            .then((res) => res.json())
            .then((users) => setUsers(users))
            .catch((error) => console.log(error));
    }, []);

    const { TableContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(users, headCells, filterFn);

    const handleSearch = (e) => {
        let target = e.target;
        setFilterFn({
            fn: (items) => {
                if (target.value === '') return items;
                else
                    return (
                        items.filter(
                            (x) => x.name.toLowerCase().includes(target.value) || x.lastname.toLowerCase().includes(target.value)
                            ||
                            x.email.toLowerCase().includes(target.value) ||
                            x.team.toLowerCase().includes(target.value) ||
                            x.office.toLowerCase().includes(target.value)) 
                    );
            }
        });
    };

    return (
        <div>
            <Box sx={{margin:'42px'}}>
                <h1>All users</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quas itaque doloribus iste labore porro quis, debitis
                    earum asperiores?
                </p>
                <Box sx={{ display: 'flex', alignItems:'baseline'}}>
                    <SearchInput onChange={handleSearch} />
                    <Link to='/dashboard/uses/adduser'>
                    <Button sx={{ marginLeft:'24px', backgroundColor: '#0800ff', fontSize:'16px', padding:'8px 48px 8px 48px', height:'46px', borderRadius:'8px' }} variant='contained'>Add new user</Button>
                    </Link>
                </Box>
            </Box>
            <Box sx={{ border: '2px solid #CECECE', margin: '42px', borderRadius: '16px' }}>
                <TableContainer>
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <Avatar src={AvatarImg} />
                                </TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.lastname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.team}</TableCell>
                                <TableCell>{user.office}</TableCell>
                                <TableCell>{user.startdate}</TableCell>
                                <TableCell>{user.lastactivity}</TableCell>
                                <TableCell>
                                   <ActionMenu />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
                <TblPagination sx={{ backgroundColor: 'red' }} />
            </Box>
        </div>
    );
};

export default AllUsersPage;
