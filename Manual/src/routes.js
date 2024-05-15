import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/installation/sql/Colors'))
const Typography = React.lazy(() => import('./views/installation/dcm/Typography'))

// SCS

const CustomerCategory = React.lazy(
  () => import('./views/scs/data/customerCategory/CustomerCategory'),
)
const MeterSize = React.lazy(() => import('./views/scs/data/meterSize/MeterSize'))
const Village = React.lazy(() => import('./views/scs/data/village/village'))
const BillCycle = React.lazy(() => import('./views/scs/data/billCycle/BillCycle'))
const CountryOrigin = React.lazy(() => import('./views/scs/data/countryOrigin/CountryOrigin'))
const MeterClass = React.lazy(() => import('./views/scs/data/meterClass/MeterClass'))
const MeterDigit = React.lazy(() => import('./views/scs/data/meterDigit/MeterDigit'))
const MeterType = React.lazy(() => import('./views/scs/data/meterType/MeterType'))
const MeterModel = React.lazy(() => import('./views/scs/data/meterModel/MeterModel'))
const MeterSizeGroup = React.lazy(() => import('./views/scs/data/meterSizeGroup/MeterSizeGroup'))
const TariffRateCons = React.lazy(() => import('./views/scs/data/tariffRateGroup/TariffRateGroup'))
const ConsumptionLevel = React.lazy(() => import('./views/scs/data/consLevel/ConsLevel'))
const WaterSource = React.lazy(() => import('./views/scs/data/waterSource/WaterSouce'))
const InvoicePrefix = React.lazy(() => import('./views/scs/data/invoicePrefix/InvoicePrefix'))
const PayementMode = React.lazy(() => import('./views/scs/data/paymentMode/PaymentMode'))
const ReasonInvestigation = React.lazy(() => import('./views/scs/data/paymentMode/PaymentMode'))

// CSS
const Buttons = React.lazy(() => import('./views/css/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/css/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/css/dropdowns/Dropdowns'))

//BPS
const ChecksRadios = React.lazy(() => import('./views/bps/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/bps/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/bps/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/bps/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/bps/layout/Layout'))
const Range = React.lazy(() => import('./views/bps/range/Range'))
const Select = React.lazy(() => import('./views/bps/select/Select'))
const Validation = React.lazy(() => import('./views/bps/validation/Validation'))

// OBP
const CoreUIIcons = React.lazy(() => import('./views/obp/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/obp/flags/Flags'))
const Brands = React.lazy(() => import('./views/obp/brands/Brands'))

// dwm
const Alerts = React.lazy(() => import('./views/dwm/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/dwm/badges/Badges'))
const Modals = React.lazy(() => import('./views/dwm/modals/Modals'))
const Toasts = React.lazy(() => import('./views/dwm/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/installation', name: 'Installation', element: Colors, exact: true },
  { path: '/installation/sql', name: 'SQL', element: Colors },
  { path: '/installation/dcm', name: 'DCM', element: Typography },
  //SCS
  { path: '/scs', name: 'System Control', element: CustomerCategory, exact: true },
  //SCS Data
  { path: '/scs/data', name: 'Data', element: CustomerCategory, exact: true },
  { path: '/scs/data/customerCategory', name: 'Customer Category', element: CustomerCategory },
  { path: '/scs/data/meterSize', name: 'Meter Size', element: MeterSize },
  { path: '/scs/data/village', name: 'Village', element: Village },
  { path: '/scs/data/billCycle', name: 'Bill Cycle', element: BillCycle },
  { path: '/scs/data/countryOrigin', name: 'Country Origin', element: CountryOrigin },
  { path: '/scs/data/meterClass', name: 'Meter Class', element: MeterClass },
  { path: '/scs/data/meterDigit', name: 'Meter Digit', element: MeterDigit },
  { path: '/scs/data/meterType', name: 'Meter Type', element: MeterType },
  { path: '/scs/data/meterModel', name: 'Meter Model', element: MeterModel },
  { path: '/scs/data/meterSizeGroup', name: 'Meter Size Group', element: MeterSizeGroup },
  { path: '/scs/data/tariffRateCons', name: 'Tariff Rate Cons.', element: TariffRateCons },
  { path: '/scs/data/consLevel', name: 'Consumption Level', element: ConsumptionLevel },
  { path: '/scs/data/waterSource', name: 'Water Source', element: WaterSource },
  { path: '/scs/data/invoicePrefix', name: 'Invoice Prefix', element: InvoicePrefix },
  { path: '/scs/data/paymentMode', name: 'Payement Mode', element: PayementMode },
  {
    path: '/scs/data/reasonInvestigation',
    name: 'Reason Investigation',
    element: ReasonInvestigation,
  },
  //SCS Maintain
  { path: '/scs/maintain', name: 'Maintain', element: MeterClass, exact: true },
  { path: '/scs/maintain/inteface', name: 'Interface', element: MeterClass },
  { path: '/scs/maintain/fieldName', name: 'Field Name', element: MeterClass },
  { path: '/scs/maintain/userMessage', name: 'User Message', element: MeterClass },
  { path: '/scs/maintain/reportTitles', name: 'Report Titles', element: MeterClass },
  { path: '/scs/maintain/billInterface', name: 'Bill Interface', element: MeterClass },
  {
    path: '/scs/maintain/applicationInterface',
    name: 'Application Interface',
    element: MeterClass,
  },
  { path: '/scs/maintain/meterRent', name: 'Meter Rent', element: MeterClass },
  { path: '/scs/maintain/consTariff', name: 'Consumption Tariff', element: MeterClass },
  { path: '/scs/maintain/kebele', name: 'Kebele Info', element: MeterClass },
  { path: '/scs/maintain/ketena', name: 'Ketena', element: MeterClass },
  { path: '/scs/maintain/updateFiscalMonth', name: 'Update Fiscal Month', element: MeterClass },
  { path: '/scs/maintain/billSection', name: 'Bill Section', element: MeterClass },
  { path: '/scs/maintain/billWorkerDuties', name: 'Bill Worker Duties', element: MeterClass },
  { path: '/scs/maintain/userInformation', name: 'User Information', element: MeterClass },
  //SCS Setup
  { path: '/scs/setup', name: 'Setup', element: MeterClass, exact: true },
  { path: '/scs/setup/options', name: 'Options', element: MeterClass },
  { path: '/scs/setup/currentMeterRent', name: 'Current Meter Rent', element: MeterClass },
  { path: '/scs/setup/currentMeterTariff', name: 'Current Meter Tariff', element: MeterClass },
  { path: '/scs/setup/penalityRate', name: 'Penality Rate', element: MeterClass },
  { path: '/scs/setup/setCompany', name: 'Set Company', element: MeterClass },
  { path: '/scs/setup/inputFont', name: 'Input Font', element: MeterClass },
  { path: '/scs/setup/interfaceFont', name: 'Interface Font', element: MeterClass },
  { path: '/scs/setup/reportFont', name: 'Report Font', element: MeterClass },
  { path: '/scs/setup/accountPeriod', name: 'Account Period', element: MeterClass },
  { path: '/scs/setup/billTemplate', name: 'Bill Template', element: MeterClass },
  { path: '/scs/setup/networkStatus', name: 'Network Status', element: MeterClass },
  { path: '/scs/setup/databaseBackup', name: 'Database Backup', element: MeterClass },
  //SCS Setting
  { path: '/scs/setting', name: 'Setting', element: MeterClass, exact: true },
  { path: '/scs/setting/disconnectReason', name: 'Disconnect Reason', element: MeterClass },
  { path: '/scs/setting/reconnectReason', name: 'Reconnect Reason', element: MeterClass },
  { path: '/scs/setting/meterChange', name: 'Meter Change', element: MeterClass },
  { path: '/scs/setting/importCustomer', name: 'Import Customer', element: MeterClass },
  {
    path: '/scs/setting/importPreviousReading',
    name: 'Import Previous Reading',
    element: MeterClass,
  },
  { path: '/scs/setting/penalityReason', name: 'Penatity Reason', element: MeterClass },
  { path: '/scs/setting/unsoldReason', name: 'Unsold Reason', element: MeterClass },
  { path: '/scs/setting/voidReason', name: 'Void Reason', element: MeterClass },
  { path: '/scs/setting/serviceCharge', name: 'Service Charge', element: MeterClass },
  {
    path: '/scs/setting/miscellaneousCostType',
    name: 'Miscellaneous Cost Type',
    element: MeterClass,
  },
  //CSS
  { path: '/css', name: 'CSS', element: Buttons, exact: true },
  { path: '/css/buttons', name: 'Buttons', element: Buttons },
  { path: '/css/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/css/button-groups', name: 'Button Groups', element: ButtonGroups },
  //BPS
  { path: '/bps', name: 'BPS', element: FormControl, exact: true },
  { path: '/bps/form-control', name: 'Form Control', element: FormControl },
  { path: '/bps/select', name: 'Select', element: Select },
  { path: '/bps/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/bps/range', name: 'Range', element: Range },
  { path: '/bps/input-group', name: 'Input Group', element: InputGroup },
  { path: '/bps/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/bps/layout', name: 'Layout', element: Layout },
  { path: '/bps/validation', name: 'Validation', element: Validation },
  { path: '/obp', exact: true, name: 'OBP', element: CoreUIIcons },
  { path: '/obp/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/obp/flags', name: 'Flags', element: Flags },
  { path: '/obp/brands', name: 'Brands', element: Brands },
  { path: '/dwm', name: 'DWM', element: Alerts, exact: true },
  { path: '/dwm/alerts', name: 'Alerts', element: Alerts },
  { path: '/dwm/badges', name: 'Badges', element: Badges },
  { path: '/dwm/modals', name: 'Modals', element: Modals },
  { path: '/dwm/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
