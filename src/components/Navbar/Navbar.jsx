import { useState } from 'react';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Sidebar } from '..';

export default function Navbar() {
  // hooks
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  // local variables
  // functions
  // return
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar
          sx={{
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: { xs: '0', sm: '240px' },
          }}
        >
          {isMobile && (
            <IconButton
              onClick={() => {
                setMobileOpen((prevMobileOpen) => !prevMobileOpen);
              }}
              edge='start'
              sx={{ color: 'inherit', outline: 'none' }}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton
            sx={{ color: 'inherit', marginLeft: 1 }}
            onClick={() => {}}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <Box>
            {!isAuthenticated ? (
              <Button sx={{ color: 'inherit' }} onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                component={Link}
                to='/profile/:id'
                onClick={() => {}}
                sx={{
                  color: 'inherit',
                  ':hover': {
                    color: 'white !important',
                    textDecoration: 'none',
                  },
                }}
              >
                {isMobile && <>My movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  src='https://pixabay.com/vectors/avatar-icon-placeholder-facebook-1577909/'
                />
              </Button>
            )}
          </Box>
          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>
      {/* ------- */}
      <Box>
        <nav
          style={
            isMobile
              ? { display: 'none' }
              : { display: 'block', width: '240px', flexShrink: 0 }
          }
        >
          {isMobile ? (
            <Drawer
              variant='temporary'
              anchor='right'
              open={mobileOpen}
              ModalProps={{ keepMounted: true }}
              sx={{ width: '240px' }}
              onClose={() => {
                setMobileOpen((prevMobileOpen) => !prevMobileOpen);
              }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer variant='permanent' open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </Box>
    </>
  );
}
// sx={{ display: { xs: 'none', sm: 'block' } }}
