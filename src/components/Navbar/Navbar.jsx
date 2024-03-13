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

export default function Navbar() {
  // hooks
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
          }}
        >
          {isMobile && (
            <IconButton
              onClick={() => {}}
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
                style={{ color: 'inherit' }}
                onClick={() => {}}
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
    </>
  );
}
// sx={{ display: { xs: 'none', sm: 'block' } }}
