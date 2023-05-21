import PropTypes from 'prop-types';
import React from 'react';
// material
import { alpha, styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

import { Box, Stack, AppBar, Toolbar, IconButton, Button } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;


const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));



// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {

const [userData,setUserData]=React.useState(localStorage.getItem('userData'));
const navigate = useNavigate();
const user=JSON.parse( localStorage.getItem('userData'));

const NavigateLink=async()=>{
  
  // console.log("Entry")
  var status=0;
  
      const q = query(collection(db, "users"), where("email", "==", user.email));
      // console.log("QueryAtNavbar",q)
      const querySnapShot= await getDocs(q);
      // console.log("querySnapshot",querySnapShot);
      
     querySnapShot.forEach((doc)=>{
       status= doc.data().userstatus
  
      })
      // console.log("Status",status);
      // return status;
    
   
      // setuserStatus(status);
      


 status===1? navigate('/client',{replace:true}): (status===0)? navigate('/dashboard/products',{replace:true}): navigate('/dashboard/app',{replace:true})


}
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <LanguagePopover />
          {
      
      !userData && 
       <button><Link to="/login">Login</Link></button>

  } 
    {
      
      userData && 
      <Button variant="contained" onClick={NavigateLink}>Dashboard</Button>
      //  <button onClick={GetLink}><Link to={userStatus ? '/client':'/'}>Dashboard</Link></button>

  } 
  
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
