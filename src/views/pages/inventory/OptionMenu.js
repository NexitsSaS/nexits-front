import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BasicModal from './ModalAssets';
import ModalDetailAssets from './ModalDetailAssets';
import { useStyle } from 'hooks/useStyle';

export default function FadeMenu({ type }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyle({ type });

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreHorizIcon />
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem class={classes.optionMenu}>
                    <BasicModal name={'edit'} />
                </MenuItem>
                <MenuItem>
                    <ModalDetailAssets name={'delete'} />
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>delete</MenuItem> */}
            </Menu>
        </div>
    );
}
