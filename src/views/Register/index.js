import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Link
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import LockIcon from "@material-ui/icons/Lock";
import gradients from "src/utils/gradients";
import Page from "src/components/Page";
import RegisterForm from "./RegisterForm";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: "100%",
    overflow: "visible",
    display: "flex",
    position: "relative",
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
      width: "50%"
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  icon: {
    backgroundImage: gradients.blue,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: "absolute",
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  iconLock: {
    color: theme.palette.common.black,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    height: 64,
    width: 64,
    fontSize: 32
  },
  registerForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: "flex",
    padding: "20px",
    backgroundColor: theme.palette.common.white
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

function Register() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Register">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <PersonAddIcon className={classes.icon} />
          <Typography gutterBottom variant="h1">
            ¡COMENZAMOS!
          </Typography>
          <Typography variant="subtitle2">
            Regístrate aquí para acceder al área de cuentas de CFL.
          </Typography>
          <RegisterForm className={classes.registerForm} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/login"
            underline="always"
            variant="subtitle2"
          >
            ¿Ya tienes cuenta?
          </Link>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/soumaya.jpg"
          title="Cover"
        >
          <Typography color="inherit" variant="subtitle1">
            Hella narvwhal Cosby sweater McSweeney&apos;s, salvia kitsch before
            they sold out High Life.
          </Typography>
          <div className={classes.person}>
            <LockIcon className={classes.iconLock} />
            <div>
              <Typography gutterBottom variant="h4">
                Estás accediendo a una Web segura
              </Typography>
              <Typography variant="subtitle2">
                Nos tomamos tu seguridad muy en serio -{" "}
                <Link
                  align="center"
                  color="secondary"
                  component={RouterLink}
                  to="/auth/register"
                  underline="always"
                  variant="subtitle2"
                >
                  Haz clic para informarte
                </Link>{" "}
                cómo protegemos tu cuenta
              </Typography>
            </div>
          </div>
        </CardMedia>
      </Card>
    </Page>
  );
}

export default Register;
