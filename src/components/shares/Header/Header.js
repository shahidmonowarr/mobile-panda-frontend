import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";

const settings = ["Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "#FBD062",
          color: "black",
          pt: 1,
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                marginLeft: "80px",
              }}
            >
              <NavLink to="/">
                <img
                  style={{ width: "170px", padding: "12px" }}
                  src="https://i.ibb.co/vqZxqCQ/Mobile-Panda-1-2.png"
                  alt=""
                />
              </NavLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to="/home"
                  >
                    <Typography textAlign="center">Home</Typography>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to="/services"
                  >
                    <Typography textAlign="center">Services</Typography>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    <Typography textAlign="center">Contact Us</Typography>
                  </NavLink>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <NavLink to="/">
                <img
                  style={{ width: "150px", padding: "12px" }}
                  src="https://i.ibb.co/vqZxqCQ/Mobile-Panda-1-2.png"
                  alt=""
                />
              </NavLink>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "flex-end"}, marginRight: '50px'}}>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <Box style={{ color: "black", marginRight: 30, textTransform: 'capitalize', fontSize: "17px"}}>Home</Box>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/services">
              <Box style={{ color: "black",  marginRight: 30, textTransform: 'capitalize', fontSize: "17px"}}>Services</Box>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/contact-us">
              <Box style={{ color: "black" , textTransform: 'capitalize', fontSize: "17px"}}>Contact Us</Box>
            </NavLink>
          </Box>

            <Box  sx={{ flexGrow: 0, marginRight: {lg: '100px'}}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
