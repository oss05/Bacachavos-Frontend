import React, { Suspense,  useState } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import TopBar from './Topbar';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    background: 'radial-gradient(ellipse at bottom left, #81ba9d 0%,rgb(31,79,92) 100%);',
    '@media all and (-ms-high-contrast:none)': {
      height: 0 // IE11 fix
    },
  },
  content: {
    flexGrow: 1,
    maxWidth: '100%',
    overflowX: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 56
    }
  },
}));

function Auth({ route }) {
  const classes = useStyles();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);
  return (
    <>
      <TopBar onOpenNavBarMobile={() => setOpenNavBarMobile(true)} />
      <NavBar
        onMobileClose={() => setOpenNavBarMobile(false)}
        openMobile={openNavBarMobile}
      />
      <div className={classes.container}>
        <div className={classes.content}>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
        </div>
      </div>
    </>
  );
}

Auth.propTypes = {
  route: PropTypes.object
};

export default Auth;
