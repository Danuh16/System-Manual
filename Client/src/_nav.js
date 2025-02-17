import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Introduction',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'INSTALLATION',
  },
  {
    component: CNavItem,
    name: 'SQL',
    to: '/installation/sql',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'DCM',
    to: '/installation/dcm',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'DAF-Tech Apps',
  },
  {
    component: CNavGroup,
    name: 'System Control',
    to: '/scs',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: {
      component: CNavGroup,
      name: 'Data',
      to: '/scs/data',
      items: [
        {
          component: CNavItem,
          name: 'Customer Category',
          to: '/scs/data/customerCategory',
        },
        {
          component: CNavItem,
          name: 'Meter Size',
          to: '/scs/data/meterSize',
        },
        {
          component: CNavItem,
          name: 'Village',
          to: '/scs/data/village',
        },
        {
          component: CNavItem,
          name: 'Bill Cycle',
          to: '/scs/data/billCycle',
        },
        {
          component: CNavItem,
          name: 'Country Origin',
          to: '/scs/data/countryOrigin',
        },
        {
          component: CNavItem,
          name: 'Meter Class',
          to: '/scs/data/meterClass',
        },
        {
          component: CNavItem,
          name: 'Meter Digit',
          to: '/scs/data/meterDigit',
        },
        {
          component: CNavItem,
          name: 'Meter Type',
          to: '/scs/data/meterType',
        },
        {
          component: CNavItem,
          name: 'Meter Model',
          to: '/scs/data/meterModel',
        },
        {
          component: CNavItem,
          name: 'Meter Size Group',
          to: '/scs/data/meterSizeGroup',
        },
        {
          component: CNavItem,
          name: 'Tariff Rate Group',
          to: '/scs/data/tariffRateGroup',
        },
        {
          component: CNavItem,
          name: 'Consumption Level',
          to: '/scs/data/consLevel',
        },
        {
          component: CNavItem,
          name: 'Water Source',
          to: '/scs/data/waterSource',
        },
        {
          component: CNavItem,
          name: 'Invoice Prefix',
          to: '/scs/data/invoicePrefix',
        },
        {
          component: CNavItem,
          name: 'Payment Mode',
          to: '/scs/data/paymentMode',
        },
        {
          component: CNavItem,
          name: 'Reason Investigation',
          to: '/scs/data/reasonInvestigation',
        },
      ],
    },
  },
  {
    component: CNavGroup,
    name: 'Bill Print',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/bps/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/bps/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/bps/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/bps/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/bps/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/bps/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/bps/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/bps/validation',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  {
    component: CNavGroup,
    name: 'Online Bill Print',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/obp/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/obp/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/obp/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'DAF-Tech Water Meter',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/dcm/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/dcm/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/dcm/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/dcm/toasts',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Payment',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
