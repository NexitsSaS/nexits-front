import useTable, { Input } from 'ui-component/table/useTable';
import { TableBody, TableCell, TableRow, Toolbar, MenuItem, CardHeader, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import FadeMenu from './OptionMenu';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import { useStyle } from 'hooks/useStyle';
import ChildModal from './ModalWithChild';
import ChildModalDetailAssets from './ChildrenModlaDetailAssets';
const headCells = [
    {
        id: 'productName',
        label: 'Product Name'
    },
    {
        id: 'type',
        label: 'Type'
    },
    {
        id: 'orderDate',
        label: 'Order Date'
    },
    {
        id: 'originalCost',
        label: 'Original Value'
    },
    {
        id: 'currentCost',
        label: 'Current Value'
    },
    {
        id: 'depreciation',
        label: 'Depreciation'
    },
    {
        id: 'action',
        label: 'Action'
    }
];
const typeColors = {
    buy: '#07cd00',
    rent: '#d1a700',
    leasing: '#001acd'
};

const AssetsManagement = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [filterFn, setFilterFn] = useState({
        fn: (items) => {
            return items;
        }
    });
    const [filterIn, setFilterIn] = useState(false);
    useEffect(() => {
        fetch('http://localhost:4001/globalassets')
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
                else return items.filter((x) => x.productName.toLowerCase().includes(target.value));
            }
        });
    };

    const handleSelectChange = (e) => {
        setTeam(e.target.value);
    };
    const handleModelChange = () => {
        setShowModal(true);
        console.log(showModal);
    };
    const classes = useStyle();
    return (
        <div>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Current User Assets</h1>
                {/* <Input sx={{ width: '50%' }} onChange={handleSearch} label="search product" /> */}
                {/* <Input onChange={handleSelectChange} select value="all">
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="Web Dev Mobile">Web Dev Mobile</MenuItem>
                    <MenuItem value="UX/UI">UX/UI</MenuItem>
                </Input> */}
                <SearchSection handleValue={handleSearch} filterIn={filterIn} setFilterIn={setFilterIn} className={classes.moveLeft} />
                {/* {filterIn && <FiltersTable />} */}
                <ChildModal name="">
                    <Button variant="contained" className={classes.addProduct} onClick={handleModelChange}>
                        Add Assets Manually
                    </Button>
                </ChildModal>
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
                                                <FadeMenu type={order.type} />
                                            </Box>
                                        </TableCell>
                                    ) : (
                                        <TableCell
                                            sx={{
                                                color: headerCell.id === 'type' ? typeColors[order[headerCell.id]] : 'none'
                                            }}
                                        >
                                            {headerCell.id == 'productName' ? (
                                                <ChildModalDetailAssets>
                                                    <CardHeader
                                                        avatar={<img src={order.imageThumbnail} alt={headerCell.id} loading="lazy" />}
                                                        title={order[headerCell.id]}
                                                    />
                                                </ChildModalDetailAssets>
                                            ) : (
                                                order[headerCell.id]
                                            )}
                                        </TableCell>
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

export default AssetsManagement;
