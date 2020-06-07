/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from "react";
import { colors } from "@material-ui/core";
import WalletTravelIcon from "@material-ui/icons/CardTravelOutlined";
import AttachMoneyIcon from "@material-ui/icons/AttachMoneyOutlined";
import TimelineIcon from "@material-ui/icons/TimelineOutlined";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import ListIcon from "@material-ui/icons/List";
import Label from "src/components/Label";

export default [
  {
    subheader: "Pages",
    items: [
      {
        title: "Tablero",
        href: "/lender/dashboard",
        icon: DashboardIcon
      },
      {
        title: "Inversión",
        href: "/lender/invertir",
        icon: TimelineIcon
      },
      {
        title: "Ventas",
        href: "/lender/vender",
        icon: AttachMoneyIcon
      },
      {
        title: "Portafolio",
        href: "/lender/portafolio",
        icon: WalletTravelIcon
      },
      {
        title: "Movimientos",
        href: "/lender/movimientos",
        icon: CompareArrowsIcon
      },
      {
        title: "Depositar",
        href: "/lender/depositar",
        icon: AssignmentIcon
      },
      {
        title: "Retar",
        href: "/lender/retirar",
        icon: CompareArrowsIcon
      },
      {
        title: "Settings",
        href: "/lender/settings",
        icon: SettingsIcon,
        items: [
          {
            title: "General",
            href: "/lender/settings/general"
          },
          {
            title: "Security",
            href: "/lender/settings/security"
          }
        ]
      }
    ]
  },
  // {
  //   subheader: "Support",
  //   items: [
  //     {
  //       title: "Changelog",
  //       href: "/changelog",
  //       icon: ListIcon,
  //       label: () => <Label color={colors.blue["500"]}>v1.3.0</Label>
  //     }
  //   ]
  // }
];
