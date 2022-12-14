import MenuIcon from '@mui/icons-material/Menu';
import { ListItemButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin/useAdmin';

const drawerWidth = 240;

function Dashboard(props) {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [appbar, setAppbar] = useState('');


  const drawer = (
    <div style={{border: 'none'}}>
       <Box sx={{ marginLeft: 5, marginTop: 3, marginBottom: 5}}>
       <Link to="/" style={{textDecoration: 'none', color: 'black'}}> 
       <img style={{width: '150px',}} src="https://i.ibb.co/G3tn5M1/Mobile-Panda-1-2.png" alt="" />
       </Link>
       </Box>
      
      <nav style={{border: 'none'}}>
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="/dashboard">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">Profile</ListItemButton>
        </Link>
        
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="/dashboard/myOrders">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">My Orders</ListItemButton>
        </Link>
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="addReview">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">Add Review</ListItemButton>
        </Link>
        {admin && 
        <>
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="/dashboard/manageService/add">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">Add Service</ListItemButton>
        </Link>
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="/dashboard/manageService">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">Manage Services</ListItemButton>
        </Link>
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="/dashboard/users">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">All Users</ListItemButton>
        </Link>
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="/dashboard/allOrders">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">All Orders</ListItemButton>
        </Link>
        </>}
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="/">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">Back To Home</ListItemButton>
        </Link>
      </nav>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          boxShadow: 0,
          py: 1
          // border: '2px solid black'
        }}
      >
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
            <Box>
               <Typography sx={{color: 'black', fontWeight: 'semiBold', textTransform: 'capitalize', paddingLeft: 5}} variant="h5" noWrap component="div">
                  Dashboard
               </Typography>
            </Box>
            <Box >
               <Typography sx={{color: 'black', fontWeight: 'semiBold', textTransform: 'capitalize', marginRight:"20px"}} variant="body1" noWrap component="div">
                  {user?.displayName}
               </Typography>
            </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, border: 'none', marginTop: 5}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none'},
            
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none'},
            border: 'none'
          }}
          // style={{border: '5px solid black'}}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`}, backgroundColor: '#E6FBFF',}}
      >
        <Toolbar />

      <main>
        <Outlet />
      </main>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;