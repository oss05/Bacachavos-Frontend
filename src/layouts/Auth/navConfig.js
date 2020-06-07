/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from "react";
import { colors } from "@material-ui/core";
import InputIcon from "@material-ui/icons/Input";
import AttachMoneyIcon from "@material-ui/icons/AttachMoneyOutlined";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import HowToRegOutlinedIcon from "@material-ui/icons/HowToRegOutlined";

export default [
  {
    subheader: "Bienvenido",
    items: [
      {
        title: "CFL",
        href: "/",
        icon: DashboardIcon
      },
      {
        title: "REGÍSTRATE",
        href: "/auth/register",
        icon: HowToRegOutlinedIcon
      },
      {
        title: "ENTRAR",
        href: "/auth/login",
        icon: InputIcon
      },
    ]
  },
];
