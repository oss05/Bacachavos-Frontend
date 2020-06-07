import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import validate from "validate.js";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
  Modal,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Grid,
  Divider,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/EmailRounded";
import CodeInput from "react-verification-code-input";
import { emailComfirm, resendEmailComfirm } from "../../actions/registerAction";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: "100%",
    overflowY: "auto",
    maxWidth: "100%",
  },
  actions: {
    justifyContent: "flex-end",
  },
  button: {
    width: "100%",
    justifyContent: "center",
  },
}));

function ComfirmEmailModal({ open, onClose, className, ...state }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputValue, setInputValue]= useState("")
  const [values, setValues]= useState("")
  const [codeState, setCodeState] = useState();

  const register = useSelector(state => state.register.registerData);

  // console.log(register)

  const handleChange =(event)=>{
    setCodeState(event.target.value)
  }
  const handleFieldChange = (event) => {
    event.persist();
    setValues((currentValues) => ({
      ...currentValues,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    }));
  };
  const schemaEmail ={
    countries : {
      idCountry : 1
  },
  users : {
      iduser : register && register.users ? register.users.iduser : null
  }
  }
  const handleReSendEmail = (event) => {
    event.preventDefault();
    dispatch(resendEmailComfirm(schemaEmail)).then(() => {
    });
  };
  if (!open) {
    return null;
  }
 const nextStep = () =>{
  history.push("/onboarding/form");
 }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(emailComfirm(register && register.users ? register.users.iduser : null, codeState, nextStep)).then(() => {
     
    });
  };

  return (
    <Modal onClose={onClose} open={open}>
      <Card {...state} className={clsx(classes.root, className)}>
        <form>
          <CardHeader align="center" title="Verifica tu correo" />
          <Divider />
          <CardContent>
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  Escribe el código que enviamos a:
                </Typography>
              </Grid>
              <Grid item xs={12} container justify="center" alignItems="center">
                <IconButton color={"primary"}>
                  <SendIcon />
                </IconButton>
              </Grid>

              <Grid item xs={12}>
              <TextField
                  fullWidth
                  name="email"
                  onChange={handleFieldChange}
                  value={register && register.users ? register.users.iduser : null}
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item xs={12} container justify="center" alignItems="center">
                <Button color="primary" onClick={handleReSendEmail} variant="contained">
                  Reenviar código de verificación
                </Button>
              </Grid>
              <Grid item xs={12} container justify="center" alignItems="center">
              <TextField

                  label="Verification Code"
                  name="code"
                  type= "number"
                  onChange={handleChange}
                  value={codeState}
                  variant="outlined"
                />
                {/* <CodeInput value={inputValue} onComplete={handleChange}/> */}
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions className={classes.actions}>
            <Button color="primary" onClick={handleSubmit} variant="contained">
              Continuar
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
}

ComfirmEmailModal.propTypes = {
  className: PropTypes.string,
  register: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

ComfirmEmailModal.defaultProps = {
  open: false,
  onClose: () => {},
};

export default ComfirmEmailModal;
