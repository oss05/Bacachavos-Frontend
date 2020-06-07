import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Typography, Grid, Button, colors } from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
import TimelineIcon from '@material-ui/icons/TimelineOutlined';

const useStyles = makeStyles(theme => ({
  root: {},
  calendar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  calendarButton: {
    backgroundColor: theme.palette.common.white
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  },
  sendButton: {
    marginTop: theme.spacing(2),
    backgroundColor: colors.teal.A400,
    color: theme.palette.getContrastText(colors.teal[500]),
    "&:hover": {
      backgroundColor: colors.teal[700]
    }
  },
  icon: {
    marginRight: theme.spacing(1)
  },
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container justify="space-between" spacing={3}>
        <Grid item lg={6} xs={12}>
          <Typography component="h2" gutterBottom variant="overline">
            Analytics
          </Typography>
          <Typography component="h1" gutterBottom variant="h3">
            Vista General
          </Typography>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Button
            className={classes.sendButton}
            variant="contained"
            className={classes.sendButton}
            variant="contained"
          >
            <PaymentIcon className={classes.icon} />
            Añadir Fondos
          </Button>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Button
            className={classes.sendButton}
            variant="contained"
            className={classes.sendButton}
            variant="contained"
          >
            <TimelineIcon className={classes.icon} />
            Invertir
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {};

export default Header;
