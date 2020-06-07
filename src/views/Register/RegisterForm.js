import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import validate from "validate.js";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  Link,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@material-ui/core";
import { registerAction } from "../../actions/registerAction";
import {geoAction} from '../../actions/geoAction'
import CustomerEditModal from './ComfirmEmailModal';
import RegisterFormMapper from './mappers/RegisterFormMapper'

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: "es requerido" },
    length: {
      maximum: 32,
      minimum: 3
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: "es requerido" },
    length: {
      maximum: 32,
      minimum: 3
    }
  },
  secondLastName:{
    presence: { allowEmpty: false, message: "es requerido" },
    length: {
      maximum: 32,
      minimum: 3
    }
  },
  email: {
    presence: { allowEmpty: false, message: "es requerido" },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: "es requerido" },
    length: {
      maximum: 30,
      minimum: 10
    }
  },
  confirmPassword:{
    presence: { allowEmpty: false, message: "es requerido" },
    length: {
      maximum: 30,
      minimum: 10
    }
  },
  // leanderBorrower: {
  //   presence: { allowEmpty: false, message: "es necesario marcar uno" },
  //   checked: true
  // },
  policy: {
    presence: { allowEmpty: false, message: "es necesario haber leído" },
    checked: true
  },
  terms: {
    presence: { allowEmpty: false, message: "es necesario haber leído" },
    checked: true
  },
  inversion: {
    presence: { allowEmpty: false, message: "es necesario haber leído" },
    checked: true
  }
};

const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  policy: {
    display: "flex",
    alignItems: "center"
  },
  policyCheckbox: {
    marginLeft: "1px"
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: "100%"
  }
}));

function RegisterForm({ className, register, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const [value, setValue] = useState("");
  const [lender, setLender] = useState(false);
  const [borrower, setBorrower] = useState(false);
  // Call the action of createLoanAction
  const addRegister = formValue => {
    dispatch( registerAction( formValue, handleEditOpen) );
    dispatch( geoAction(formState.values.email));
  } 

  const handleEditOpen = () => {
    setOpenEdit(true);
  }

  const handleEditClose = () => {
    setOpenEdit(false);
  }
  const handleChangeRadio = event => {
    setValue(event.target.value);
    console.log(value)
    if (value === "inversionista"){
      setLender(true)
    } else {
      setBorrower(true)
    }
  };
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  const handleChange = event => {
    event.persist();

    setFormState(prevFormState => ({
      ...prevFormState,
      values: {
        ...prevFormState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...prevFormState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addRegister(RegisterFormMapper(formState, lender, borrower))
    // .then(() => {
    // });
  };

  const hasError = field =>
    !!(formState.touched[field] && formState.errors[field]);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(prevFormState => ({
      ...prevFormState,
      isValid: !errors,
      errors: errors || {}
    }));
  }, [formState.values]);

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit}
    >
      <div className={classes.fields}>
        <TextField
          error={hasError("firstName")}
          helperText={
            hasError("firstName") ? formState.errors.firstName[0] : null
          }
          label="Nombre(s)"
          name="firstName"
          id="firstName"
          onChange={handleChange}
          value={formState.values.firstName || ""}
          variant="outlined"
        />
        <TextField
          error={hasError("lastName")}
          helperText={
            hasError("lastName") ? formState.errors.lastName[0] : null
          }
          label="Apellido Paterno"
          name="lastName"
          id="lastName"
          onChange={handleChange}
          value={formState.values.lastName || ""}
          variant="outlined"
        />
        <TextField
          error={hasError("secondLastName")}
          helperText={
            hasError("secondLastName") ? formState.errors.secondLastName[0] : null
          }
          label="Apellido materno"
          name="secondLastName"
          id="secondLastName"
          onChange={handleChange}
          value={formState.values.secondLastName || ""}
          variant="outlined"
        />
        <TextField
          error={hasError("email")}
          fullWidth
          helperText={hasError("email") ? formState.errors.email[0] : null}
          label="Email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formState.values.email || ""}
          variant="outlined"
        />
        <TextField
          error={hasError("password")}
          fullWidth
          helperText={
            hasError("password") ? formState.errors.password[0] : null
          }
          label="Contraseña"
          name="password"
          id="password"
          onChange={handleChange}
          type="password"
          value={formState.values.password || ""}
          variant="outlined"
        />
        <TextField
          error={hasError("confirmPassword")}
          fullWidth
          helperText={
            hasError("confirmPassword")
              ? formState.errors.confirmPassword[0]
              : null
          }
          label="Comfirmar Contraseña"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
          type="password"
          value={formState.values.confirmPassword || ""}
          variant="outlined"
        />
        <div>
          <RadioGroup
          error={hasError("leanderBorrower")}
            aria-label="leanderBorrower"
            name="leanderBorrower"
            id="leanderBorrower"
            value={value}
            onChange={handleChangeRadio}
            row
          >
            <FormControlLabel
              value="solicitarPrestamo"
              control={<Radio color="primary" />}
              label="Solicitar préstamo"
              labelPlacement="End"
            />
            <FormControlLabel
              value="inversionista"
              control={<Radio color="primary" />}
              label="Quiero inversionista"
              labelPlacement="End"
            />
          </RadioGroup>
          <div className={classes.policy}>
            <Checkbox
              checked={formState.values.terms || false}
              className={classes.termsCheckbox}
              color="primary"
              name="terms"
              id="terms"
              onChange={handleChange}
            />
            <Typography color="textSecondary" variant="body1">
              He leído y accepto los{" "}
              <Link
                color="secondary"
                component={RouterLink}
                to="#"
                underline="always"
                variant="h6"
              >
                Términos y Condiciones
              </Link>
              de CFL
            </Typography>
          </div>
          {hasError("terms") && (
            <FormHelperText error>{formState.errors.terms[0]}</FormHelperText>
          )}

          <div className={classes.policy}>
            <Checkbox
              checked={formState.values.policy || false}
              className={classes.policyCheckbox}
              color="primary"
              name="policy"
              id="policy"
              onChange={handleChange}
            />
            <Typography color="textSecondary" variant="body1">
              Acepto la{" "}
              <Link
                color="secondary"
                component={RouterLink}
                to="#"
                underline="always"
                variant="h6"
              >
                pólica de privacidad
              </Link>{" "}
              y estoy de acuerdo que mi información personal sea utilizada por
              CFL para contactarme y crear mi perfil.
            </Typography>
          </div>
          {hasError("policy") && (
            <FormHelperText error>{formState.errors.policy[0]}</FormHelperText>
          )}
          <div className={classes.policy}>
            <Checkbox
              checked={formState.values.inversion || false}
              className={classes.inversionCheckbox}
              color="primary"
              name="inversion"
              id="inversion"
              onChange={handleChange}
            />
            <Typography color="textSecondary" variant="body1">
              Acepto la{" "}
              <Link
                color="secondary"
                component={RouterLink}
                to="#"
                underline="always"
                variant="h6"
              >
                Carta de Auto-Inversión
              </Link>{" "}
              que proporciona CFL.
            </Typography>
          </div>
          {hasError("inversion") && (
            <FormHelperText error>{formState.errors.inversion[0]}</FormHelperText>
          )}
        </div>
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        disabled={!formState.isValid}
        size="large"
        variant="contained"
        type="submit"
      >
        Crear Cuenta
      </Button>
      <CustomerEditModal
        onClose={handleEditClose}
        open={openEdit}
      />
    </form>
  );
}

RegisterForm.propTypes = {
  className: PropTypes.string,
  register: PropTypes.object.isRequired
};

export default RegisterForm;
