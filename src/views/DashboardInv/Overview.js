import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card, Typography, Grid, colors
} from '@material-ui/core';
import Label from 'src/components/Label';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0
  },
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  }
}));

function Overview({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    income: '854,355.00',
    expanses: '373,250.50',
    profit: '123,532.00',
    subscriptions: '26,000'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
      >
        <Grid
          className={classes.item}
          item
          md={4}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Valor total
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3">
              $
              {data.income}
            </Typography>
            <Label
              className={classes.label}
              color={colors.green[600]}
              variant="contained"
            >
              +5%
            </Label>
          </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={4}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Valor de retorno
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3">
              $
              {data.expanses}
            </Typography>
            <Label
              className={classes.label}
              color={colors.green[600]}
              variant="contained"
            >
              +12%
            </Label>
          </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={4}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Mis Inversiones
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3">{data.profit}</Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

Overview.propTypes = {
  className: PropTypes.string
};

export default Overview;
