

import { useState } from "react";
import "./LockDashboard.css";
import { Home, Wrench, ChevronDown, ChevronUp , Key, Users, Car, Wallet, BarChart2} from "lucide-react";
import ManageService from "../Services copy/ManageService";
import ServiceRequest from "../Services copy/ServiceRequest";
import CreateService from "../Services copy/CreateServices/CreateServices";
import MyServices from "../Services copy/MyServices/MyServices";
import CreateStripeAccount from "../CreateStripeAccount/CreateStripeAccount"; 
import LocksmithAvailability from "../Services copy/LocksmithAvailability/LocksmithAvailability";
import MyProfile from "../Services copy/MyProfile/MyProfile";
import StripeOnboarding from "../StripeOnboarding/StripeOnboarding";

const DashboardHome = () => <div>Welcome to Locksmith Dashboard</div>;

const menuItems = [
  { name: "Dashboard", icon: Home, component: <DashboardHome /> },
  { name: "My Profile", icon: Home, component: <MyProfile/> },

  {
    name: "Manage Service",
    icon: Wrench,
    subMenu: [
      // { name: "Manage Service", icon: Wrench, component: <ManageService /> }
      { name: "Create Service", icon: Wrench, component: <CreateService /> },
      { name: "Service Request", icon: Wrench, component: <ServiceRequest /> },
      { name: "My Services", icon: Wrench, component: <MyServices /> },],  

  },
  { name: "Stripe", icon: Home, component: <CreateStripeAccount /> },
  { name: "Availability", icon: Home, component: <LocksmithAvailability /> },
  { name: "Onboard", icon: Home, component: <StripeOnboarding /> },



  
  

//   { name: "Manage Locksmith", icon: Key, component: <ManageLocksmith /> },
//   { name: "Manage Customer", icon: Users, component: <ManageCustomer /> },
//   { name: "Transaction Details", icon: Wallet, component: <TransactionTable /> },
//   { name: "Car Key Details", icon: Car, component: <CarKeyDetails /> },
//   { name: "Statistics Reports", icon: BarChart2, component: <StatisticsReports /> },

];

const LockDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleMenuClick = (item) => {
    if (item.subMenu) {
      setExpandedMenu(expandedMenu === item.name ? null : item.name);
    } else {
      setActiveTab(item.name);
    }
  };

  const ActiveComponent = menuItems
    .flatMap((item) => (item.subMenu ? item.subMenu : item))
    .find((subItem) => subItem.name === activeTab)?.component;

  return (
    <div className="container-fluid">
      <div className="row dashboard-container">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 sidebar">
          {/* <div className="brand">LockQuick</div> */}
          <div className="menu">
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`menu-item ${activeTab === item.name ? "active" : ""}`}
                >
                  <item.icon size={18} /> {item.name}
                  {item.subMenu &&
                    (expandedMenu === item.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                </button>
                {item.subMenu && expandedMenu === item.name && (
                  <div className="submenu">
                    {item.subMenu.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => setActiveTab(subItem.name)}
                        className={`submenu-item ${activeTab === subItem.name ? "active" : ""}`}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 main-content">
          <div className="card">
            <div className="card-body">{ActiveComponent}</div>
          </div>
          <div className="footer">Copyright © 2025</div>
        </div>
      </div>
    </div>
  );
};

export default LockDashboard;
