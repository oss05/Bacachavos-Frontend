import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Link,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import Page from "src/components/Page";
import gradients from "src/utils/gradients";
import LoginForm from "./LoginForm";

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
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  icon: {
    color: theme.palette.common.black,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    height: 64,
    width: 64,
    fontSize: 32
  },
  loginForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: "flex"
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

function Login() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Login">
      <Card className={classes.card}>
        <CardContent className={classes.media} title="Cover">
          <Typography gutterBottom variant="h1">
            Acceso clientes
          </Typography>
          <Divider className={classes.divider} />
          <Typography gutterBottom variant="h4">
            Bienvenido al área de cuentas de CFL
          </Typography>
          <Typography gutterBottom variant="h4">
            ¿No tienes cuenta aún?
          </Typography>
          <Divider className={classes.divider} />
          <Typography color="divader" variant="subtitle2">
            Para solicitar un préstamo{" "}
            <Link
              align="center"
              color="secondary"
              component={RouterLink}
              to="/auth/register"
              underline="always"
              variant="subtitle2"
            >
              Regístrate aquí
            </Link>
          </Typography>
          <Typography color="divader" variant="subtitle2">
            Para convertirse en inversionista{" "}
            <Link
              align="center"
              color="secondary"
              component={RouterLink}
              to="/auth/register"
              underline="always"
              variant="subtitle2"
            >
              Regístrate aquí
            </Link>
          </Typography>
          <div className={classes.person}>
            <LockIcon className={classes.icon} />
            <div>
              <Typography gutterBottom variant="h4">
                Estás accediendo a una Web segura
              </Typography>
              <Typography variant="subtitle2">
                Nos tomamos tu seguridad muy en serio - {" "}
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
        </CardContent>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h3">
            Bienvenido a
          </Typography>
          <Typography variant="subtitle2">Capital Funding Lab</Typography>
          <LoginForm className={classes.loginForm} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/register"
            underline="always"
            variant="subtitle2"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            ¿Aún no eres miembro?{" "}
            <Link
              align="center"
              color="secondary"
              component={RouterLink}
              to="/auth/register"
              underline="always"
              variant="subtitle2"
            >
              Regístrate aquí
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Page>
  );
}

export default Login;
