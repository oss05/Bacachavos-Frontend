/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Input,
  colors,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import axios from "../../../utils/axios";
import NotificationsPopover from "../../NotificationsPopover";
import { logoutUser } from "../../../actions/authActions";


const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none",
    backgroundColor: colors.grey[300],
  },
  logo: {
    width: "3em",
    marginLeft: theme.spacing(6),
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    backgroundColor: "rgba(255,255,255, 0.1)",
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: "flex",
    alignItems: "center"
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: "inherit"
  },
  searchInput: {
    flexGrow: 1,
    color: "inherit",
    "& input::placeholder": {
      opacity: 1,
      color: "inherit"
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    "&:hover": {
      backgroundColor: colors.green[900]
    }
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  chatButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  }
}));

function TopBar({ onOpenNavBarMobile, className, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const notificationsRef = useRef(null);
  const [notifications, setNotifications] = useState([]);
  const [openNotifications, setOpenNotifications] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push('/auth/login');
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  useEffect(() => {
    let mounted = true;

    const fetchNotifications = () => {
      axios.get("/api/account/notifications").then(response => {
        if (mounted) {
          setNotifications(response.data.notifications);
        }
      });
    };

    fetchNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="secondary">
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/cfl-logo-2.png"
            className={classes.logo}
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
            Sign out
          </Button>
        </Hidden>
      </Toolbar>
      <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default TopBar;
