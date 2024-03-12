import { CssBaseline, Box } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Actors, Movies, Profile, Navbar, MovieInformation } from './';

export default function App() {
  //
  // hooks
  // local variables

  //
  return (
    <>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <CssBaseline />
        <Navbar />
        <Box sx={{ flexGrow: 1, padding: '32px' }}>
          <Box sx={{ height: '72px' }} />
          <div />
          <Switch>
            <Route exact path='/'>
              <Movies />
            </Route>
            <Route exact path='/movie/:id'>
              <MovieInformation />
            </Route>
            <Route exact path='/actors/:id'>
              <Actors />
            </Route>
            <Route exact path='/profile/:id'>
              <Profile />
            </Route>
          </Switch>
        </Box>
      </Box>
    </>
  );
}
