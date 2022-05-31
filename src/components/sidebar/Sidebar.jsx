import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';

const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'><span className="logo">Admin</span></div>
        <hr />
        <div className='center'>
            <ul>
              <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                  <PersonOutlineOutlinedIcon className="icon" />
                  <span>Users</span>
                  </li>
                <li>
                <CategoryOutlinedIcon className="icon" />
                  <span>products</span>
                  </li>
                <li>
                <BorderColorOutlinedIcon className="icon" />
                  <span>Orders</span>
                  </li>
                <li>
                <DeliveryDiningOutlinedIcon className="icon" />
                  <span>Delivery</span>
                  </li>
                  <p className="title">USEFUL</p>
                <li>
                <QueryStatsOutlinedIcon className="icon" />
                  <span>Stats</span>
                  </li>
                <li>
                <CircleNotificationsOutlinedIcon className="icon" />
                  <span>Notifications</span>
                  </li>
                  <p className="title">SERVICE</p>
                <li>
                <HealthAndSafetyOutlinedIcon className="icon" />
                  <span>System Health</span>
                  </li>
                <li>
                <DescriptionOutlinedIcon className="icon" />
                  <span>Logs</span>
                  </li>
                <li>
                <SettingsOutlinedIcon className="icon" />
                  <span>Settings</span>
                  </li>
                  <p className="title">USER</p> 
                <li>
                
                <AccountBoxOutlinedIcon className="icon" />
                  <span>Profile</span>
                  </li>
                <li>
                <LogoutOutlinedIcon className="icon" />
                  <span>Logout</span>
                  </li>
            </ul>
        </div>
        <div className='bottom'>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default sidebar