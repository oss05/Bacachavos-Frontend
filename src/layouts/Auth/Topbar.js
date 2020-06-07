import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Hidden,  IconButton, Grid, Button, colors } from "@material-ui/core";
import InputIcon from "@material-ui/icons/Input";
import HowToRegOutlinedIcon from "@material-ui/icons/HowToRegOutlined";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  logo: {
    width: "3em",
    marginLeft: theme.spacing(6)
  },
  singinButton: {
    marginLeft: theme.spacing(1),
    borderColor: colors.teal["500"],
    borderRadius: "0px",
    border: "1px solid",
    "&:hover": {
      backgroundColor: colors.teal["500"],
      color: theme.palette.common.white
    }
  },
  singinIcon: {
    marginRight: theme.spacing(1)
  },
  loginButton: {
    marginLeft: theme.spacing(1),
    borderColor: colors.blueGrey["100"],
    borderRadius: "0px",
    border: "1px solid",
    backgroundColor: colors.teal["500"],
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.common.black
    }
  },
  loginIcon: {
    marginRight: theme.spacing(1)
  },
  cflButton: {
    marginLeft: theme.spacing(1),
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: colors.cyan["400"],
      color: theme.palette.common.white
    }
  }
}));

function Topbar({ onOpenNavBarMobile, className, ...rest }) {
  const classes = useStyles();
  const history = useHistory();

  const handleSingin = () => {
    history.push("/auth/register");
    // dispatch(logout());
  };
  const handleLogin = () => {
    history.push("/auth/login");
    // dispatch(logout());
  };
  const handleCfl = () => {
    history.push("/auth/login");
    // dispatch(logout());
  };
  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="navbar">
      <Toolbar>
        <Grid alignItems="center" container justify="space-between" spacing={3}>
          <Hidden lgUp>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={onOpenNavBarMobile}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Grid item>
            <RouterLink to="/">
              <img
                alt="Logo"
                src="/images/logos/cfl-logo-2.png"
                className={classes.logo}
              />
            </RouterLink>
          </Grid>
          <Grid item>
          <Hidden mdDown>
            <Grid container>
              <Grid item>
                <Button className={classes.cflButton} onClick={handleCfl}>
                  CFL
                </Button>
                <Button
                  className={classes.singinButton}
                  variant="outlined"
                  onClick={handleSingin}
                >
                  <HowToRegOutlinedIcon className={classes.singinIcon} />
                  REGÍSTRATE
                </Button>
                <Button
                  className={classes.loginButton}
                  variant="outlined"
                  onClick={handleLogin}
                >
                  <InputIcon className={classes.loginIcon} />
                  ENTRAR
                </Button>
              </Grid>
            </Grid>
          </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default Topbar;
