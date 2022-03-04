import React, {useState} from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'About Me', 'Resume', 'Contact Me'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{backgroundColor: "#182838"}} color="primary" position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h4" noWrap component="div" sx={{fontFamily: "Poppins Bold" ,mr: 8,
           display: { xs: 'none', md: 'flex' } }}>
            PORTFOLIO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"
              aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
              keepMounted transformOrigin={{vertical: 'top', horizontal: 'left'}}
              open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography variant='h6' sx={{fontFamily: "Poppins Bold"}} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            textAlign="center"
            sx={{ fontFamily:"Poppins Bold", display: { xs: 'flex', md: 'none' } }}
          >
            PORTFOLIO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;