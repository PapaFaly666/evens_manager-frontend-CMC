import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { FaUserCircle } from 'react-icons/fa';
import { accountService } from '../_service/account.service';
import { Navigate } from 'react-router-dom';


export default function FadeMenu() {
  const [navigate, setNavigate] = React.useState(false);

  const handleLogout = () => {
    accountService.logout();
    setNavigate(true);
    console.log("clean");
}

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (navigate){
    return <Navigate to={"/login"}/>
  }
  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-lg-inline-flex">
        <FaUserCircle />
      </button>


      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={() => { handleClose(); handleLogout(); }}>Deconnexion</MenuItem>
      </Menu>
    </div>
  );
}