import { LogBox, Platform } from 'react-native'

import AddDevice from 'views/Devices/AddDevice'
import {WifiConnect} from 'views/Devices/ConnectDevice'
import Devices from 'views/Devices/Devices'
import Device from 'views/Devices/Device'
import Home from 'views/Home'
import Login from 'views/pages/Login'
import Setup from 'views/pages/Setup'
import SignalStrength from 'views/Traffic/SignalStrength'
import Traffic from 'views/Traffic/Traffic'
import TrafficTimeSeries from 'views/Traffic/TrafficTimeSeries'
import TrafficList from 'views/Traffic/TrafficList'
import WirelessConfiguration from 'views/WirelessConfiguration'
import Groups from 'views/Groups/Groups'
import Tags from 'views/Tags'
import DNSBlock from 'views/DNS/DNSBlock'
import DNSOverride from 'views/DNS/DNSOverride'
import DNSLog from 'views/DNS/DNSLog'
import DNSLogEdit from 'views/DNS/DNSLogEdit'
import DynDns from 'views/DNS/DynDns'
import CoreDns from 'views/DNS/CoreDns'
import Wireguard from 'views/Wireguard'
import Firewall from 'views/Firewall/Firewall'
import FirewallSettings from 'views/Firewall/FirewallSettings'
import PFW from 'views/Firewall/Pfw'
import PFWTasks from 'views/System/PfwTasks'
import Mesh from 'views/Mesh'
import Events from 'views/Events'
import Plugins from 'views/Plugins'
import AuthSettings from 'views/AuthSettings'
import AuthValidate from 'views/AuthValidate'
import SystemInfoTabView from 'views/SystemInfoTabView'
import LinkConfigurationTabView from 'views/LinkConfigurationTabView'
import Alerts from 'views/Alerts'
import AlertSettings from 'views/AlertSettings'
import AddAlert from 'views/Alerts/AddAlert'
import SpeedTest from 'views/SpeedTest'
import Supernetworks from 'views/Supernetworks'
import BandwidthUsage from 'views/System/BandwidthUsage' 
import SystemInformation from 'views/SystemInformation'
import MakeCall from 'views/Calling/MakeCall'
import CallHistory from 'views/Calling/CallHistory'
import InternetDataRouting from 'views/InternetDataRouting'
import Log from 'views/System/Log'
import DiagnosticsDashboard from 'views/System/DiagnosticsDashboard'
import GeneralSettings from 'views/GeneralSettings'
import RemoteManagement from 'views/RemoteManagement'
import SerialToIP from 'views/SerialToIP'
import SNMP from 'views/SNMP'
import VoiceExtensions from 'views/VoiceExtensions'
import Accessories from 'views/Accessories'
import Advanced from 'views/Advanced'

import {
  ActivityIcon,
  AlertTriangleIcon,
  ArrowUpCircleIcon,
  BanIcon,
  BarChart3Icon,
  BarChartHorizontalIcon,
  BellIcon,
  CableIcon,
  CogIcon,
  ComputerIcon,
  ContainerIcon,
  EarthLockIcon,
  EyeIcon,
  FlameIcon,
  GaugeCircleIcon,
  GaugeIcon,
  GlobeIcon,
  HammerIcon,
  HistoryIcon,
  HomeIcon,
  KeyIcon,
  LaptopIcon,
  LineChartIcon,
  ListTreeIcon,
  Logs,
  NetworkIcon,
  PhoneCall,
  PuzzleIcon,
  Repeat2,
  RouterIcon,
  ScanSearchIcon,
  SeparatorVerticalIcon,
  Settings2Icon,
  SettingsIcon,
  ShuffleIcon,
  SignalIcon,
  Table2Icon,
  TableIcon,
  TagsIcon,
  UsersIcon,
  WaypointsIcon,
  WifiIcon,
  ArrowRightLeft,
  ServerIcon,
  MessageCircleIcon,
  PlugIcon,
  WrenchIcon,
} from 'lucide-react-native'
import CustomPlugin from 'views/CustomPlugin'
import { CellularStatus } from 'components/Dashboard/ConnectionWidgets'
import { Server } from 'miragejs'

//import { BrandIcons } from 'IconUtils'

const routes = [
  {
    path: 'system information',
    name: 'Status',
    icon: SignalIcon,
    component: SystemInformation,
    layout: 'admin'
  },  
  {
    name: 'Configuration',
    state: 'netCollapse',
    views: [
      {
        path: 'general settings',
        name: 'General Settings',
        icon: CogIcon,
        component: GeneralSettings,
        layout: 'admin'
      },
      {
        path: 'connection manager',
        name: 'Connection Manager',
        icon: ShuffleIcon,
        component: InternetDataRouting,
        layout: 'admin'
      },
      {
        path: 'network',
        name: 'Network',
        icon: NetworkIcon,
        component: Supernetworks,
        layout: 'admin'
      },
      {
        path: 'firewall',
        name: 'Firewall',
        icon: FlameIcon,
        component: Firewall,
        hideSimple: true,
        layout: 'admin'
      },
      {
        path: 'remote management',
        name: 'Remote Management',
        icon: GlobeIcon,
        component: RemoteManagement,
        hideSimple: true,
        layout: 'admin'
      },
      {
        path: 'serial to ip',
        name: 'Serial to IP',
        icon: ArrowRightLeft,
        component: SerialToIP,
        hideSimple: true,
        layout: 'admin'
      },
      {
      path: 'snmp',
      name: 'SNMP',
      icon: ServerIcon,
      component: SNMP,
      hideSimple: true,
      layout: 'admin'
      },
      {
        path: 'voice extensions',
        name: 'Voice Extensions',
        icon: ServerIcon,
        component: VoiceExtensions,
        hideSimple: true,
        layout: 'admin'
        },
        {
          path: 'accessories',
          name: 'Accessories',
          icon: PuzzleIcon,
          component: Accessories,
          hideSimple: true,
          layout: 'admin'
          },
          {
            path: 'plugins',
            name: 'Plugins',
            icon: PlugIcon,
            component: Plugins,
            hideSimple: true,
            layout: 'admin'
          },
    ]
  },
  {
    name: 'Data & Tools',
    state: 'netCollapse',
    views: [
      {
        path: 'calls',
        name: 'Calls',
        icon: PhoneCall,
        component: CallHistory,
        layout: 'admin'
      },
      {
        path: 'diagnosticsdashboard/',
        name: 'Diagnostics',
        icon: WrenchIcon,
        component: DiagnosticsDashboard,
        hideSimple: true,
        layout: 'admin'
      },
      {
        path: 'system log',
        name: 'System Log',
        icon: Logs,
        component: Log,
        layout: 'admin'
        },
        {
          path: 'advanced',
          name: 'Advanced',
          icon: CogIcon,
          component: Advanced,
          layout: 'admin'
          },
    ]
  },
  {
    path: 'home',
    name: 'Home',
    icon: HomeIcon,
    component: Home,
    layout: 'admin'
  },
  {
    name: 'Devices',
    icon: LaptopIcon,
    path: 'devices',
    component: Devices,
    layout: 'admin'
  },
  {
    name: 'Device',
    path: 'devices/:id',
    component: Device,
    hidden: true,
    layout: 'admin'
  },
  {
    layout: 'admin',
    path: 'add_device',
    redirect: true,
    component: AddDevice
  },
  {
    layout: 'admin',
    path: 'connect_device',
    redirect: true,
    component: WifiConnect
  },
  {
    name: 'Calling',
    state: 'netCollapse',
    views: [
      {
        path: 'make call',
        name: 'Make Call',
        icon: PhoneCall,
        component: MakeCall,
        layout: 'admin'
      },
      {
        path: 'call history',
        name: 'Call History',
        icon: HistoryIcon,
        component: CallHistory,
        layout: 'admin'
      },
    ]
  },
  {
    name: 'Network',
    state: 'netCollapse',
    views: [
      {
        path: 'internet data routing',
        name: 'Internet Data Routing',
        icon: ShuffleIcon,
        component: InternetDataRouting,
        layout: 'admin'
      },
      {
        path: 'wireless',
        name: 'Wifi',
        icon: WifiIcon,
        wifi: true,
        component: WirelessConfiguration,
        layout: 'admin'
      },
      {
        path: 'wireguard',
        name: 'VPN',
        icon: EarthLockIcon,
        component: Wireguard,
        hideSimple: true,
        layout: 'admin'
      },
      {
        path: 'supernets',
        name: 'DHCP Settings',
        icon: NetworkIcon,
        hideSimple: true,
        component: Supernetworks,
        layout: 'admin'
      },
      {
        path: 'uplink',
        name: 'Link Settings',
        icon: WaypointsIcon,
        component: LinkConfigurationTabView,
        hideSimple: true,
        layout: 'admin'
      },
      {
        path: 'mesh',
        name: 'MESH',
        icon: RouterIcon,
        component: Mesh,
        hideSimple: true,
        layout: 'admin',
        plus: true
      },
      {
        path: 'speedtest',
        name: 'Speed Test',
        icon: GaugeCircleIcon,
        component: SpeedTest,
        hideSimple: true,
        layout: 'admin'
      }
    ]
  },
  {
    name: 'Firewall',
    icon: FlameIcon,
    state: 'firewallCollapse',
    hideSimple: true,
    views: [
      {
        path: 'firewall',
        name: 'Firewall',
        icon: FlameIcon,
        component: Firewall,
        hideSimple: true,
        layout: 'admin'
      },
      {
        path: 'firewallSettings',
        name: 'Services',
        icon: Settings2Icon,
        hideSimple: true,
        component: FirewallSettings,
        layout: 'admin'
      },
      {
        path: 'pfw',
        name: 'PFW',
        icon: FlameIcon,
        component: PFW,
        hideSimple: true,
        layout: 'admin',
        plus: true
      }
    ]
  },
  {
    name: 'DNS',
    state: 'dnsCollapse',
    views: [
      {
        path: 'dnsBlock',
        name: 'Blocklists/Ad-Block',
        icon: BanIcon,
        component: DNSBlock,
        layout: 'admin'
      },
      {
        path: 'dnsLog/:ips/:text',
        name: 'DNS Log',
        icon: ListTreeIcon,
        component: DNSLog,
        layout: 'admin'
      },
      {
        path: 'dnsLogEdit',
        name: 'DNS Log Settings',
        icon: ListTreeIcon,
        component: DNSLogEdit,
        layout: 'admin',
        hidden: true
      },
      {
        path: 'dyndns',
        name: 'Dynamic DNS',
        icon: ArrowUpCircleIcon,
        hideSimple: true,
        component: DynDns,
        layout: 'admin'
      },
      {
        path: 'dns',
        name: 'DNS Settings',
        icon: HammerIcon,
        hideSimple: true,
        component: CoreDns,
        layout: 'admin'
      }
    ]
  },
  {
    name: 'Traffic',
    icon: LineChartIcon,
    state: 'trafficCollapse',
    views: [
      {
        path: 'traffic',
        name: 'Bandwidth Summary',
        icon: LineChartIcon,
        component: Traffic,
        layout: 'admin',
        hidden: Platform.OS == 'ios'
      },
      {
        path: 'timeseries',
        name: 'Bandwidth Timeseries',
        icon: BarChart3Icon,
        component: TrafficTimeSeries,
        layout: 'admin',
        hidden: Platform.OS == 'ios'
      },
      {
        path: 'signal/strength',
        name: 'Signal Strength',
        icon: SignalIcon,
        hideSimple: true,
        component: SignalStrength,
        layout: 'admin'
      },
      {
        path: 'trafficlist/:ips',
        name: 'Traffic',
        icon: BarChartHorizontalIcon,
        component: TrafficList,
        layout: 'admin'
      }
    ]
  },
  {
    name: 'Monitor',
    state: 'eventsCollapse',
    hideSimple: true,
    views: [
      {
        path: 'alerts',
        name: 'Alerts',
        icon: AlertTriangleIcon,
        component: Alerts,
        layout: 'admin'
      },
      {
        path: 'alerts/settings',
        name: 'Alerts Configuration',
        icon: Settings2Icon,
        component: AlertSettings,
        layout: 'admin',
        hidden: true
      },
      {
        name: 'Alert',
        path: 'alerts/:id',
        component: AddAlert,
        hidden: true,
        layout: 'admin'
      },
      {
        path: 'events',
        name: 'Events',
        icon: EyeIcon,
        component: Events,
        layout: 'admin'
      },
      {
        path: 'pfw_tasks',
        name: 'Tasks',
        icon: Repeat2,
        component: PFWTasks,
        hideSimple: true,
        layout: 'admin',
        plus: true
      },
      {
        path: 'bandwidth_usage',
        name: 'Bandwidth Usage',
        icon: RouterIcon,
        component: BandwidthUsage,
        hideSimple: true,
        layout: 'admin',
        plus: true
      }
    ]
  },
  {
    name: 'System',
    state: 'systemCollapse',
    views: [
      {
        path: 'system information',
        name: 'System Information',
        icon: ActivityIcon,
        component: SystemInformation,
        layout: 'admin'
      },
      {
        path: 'info',
        name: 'SPR Software Info',
        icon: ComputerIcon,
        component: SystemInfoTabView,
        layout: 'admin'
      },
      {
      path: 'Log',
      name: 'Log',
      icon: Logs,
      component: Log,
      layout: 'admin'
      },
      {
        path: 'plugins',
        name: 'Plugins',
        icon: PuzzleIcon,
        component: Plugins,
        hideSimple: true,
        layout: 'admin'
      },
      {
        layout: 'admin',
        path: 'custom_plugin/:name',
        redirect: true,
        component: CustomPlugin
      },
      {
        path: 'auth/',
        name: 'Auth',
        icon: KeyIcon,
        component: AuthSettings,
        hideSimple: true,
        layout: 'admin'
      },
      {
        path: 'diagnosticsdashboard/',
        name: 'Diagnostics',
        icon: KeyIcon,
        component: DiagnosticsDashboard,
        hideSimple: true,
        layout: 'admin'
      },
    ]
  },
  {
    path: 'login',
    component: Login,
    layout: 'auth'
  },
  {
    path: 'setup',
    component: Setup,
    layout: 'auth'
  },
  {
    path: 'validate',
    component: AuthValidate,
    layout: 'auth'
  }
]

const getRoutes = (routes, layout = 'admin') => {
  return routes
    .map((prop, key) => {
      if (prop.views) {
        return getRoutes(prop.views, layout)
      }

      if (prop.layout && prop.layout.includes(layout)) {
        return { path: prop.path, element: prop.component }
      } else {
        return null
      }
    })
    .filter((r) => r)
    .flat()
}

const routesAuth = getRoutes(routes, 'auth')
const routesAdmin = getRoutes(routes, 'admin')

export { routes, routesAuth, routesAdmin }

export default routes
