

// import { useState } from "react";
// import "./Dashboard.css";
// import { Home, Wrench, ChevronDown, ChevronUp , Key, Users, Car, Wallet, BarChart2} from "lucide-react";
// import CreateService from "../Service/CreateService";
// import ManageLocksmith from "../LockSmith/ManageLocksmith";
// import ManageCustomer from "../Customer/ManageCustomer";
// import ManageService from "../Service/ManageService";
// // import SetCommission from "../Commission/Commission";
// import TransactionTable from "../Transaction/Transaction";
// import StatisticsReports from "../StatisticsReports/StatisticsReports";
// import CarKeyDetails from "../CarKeyDetails/CarKeyDetails";
// import ServiceRules from "../ServiceRules/ServiceRules";


// const DashboardHome = () => <div>Welcome to Admin Dashboard</div>;

// const menuItems = [
//   { name: "Dashboard", icon: Home, component: <DashboardHome /> },
//   {
//     name: "Manage Service",
//     icon: Wrench,
//     subMenu: [
//       { name: "Create Service", component: <CreateService /> },
//       { name: "Update Service", icon: Wrench, component: <ManageService /> },
//       { name: "Update Rules", icon: Wrench, component: <ServiceRules /> }
//     ],     
//   },
//   // { name: "Manage Service", icon: Wrench, component: <ManageService /> },

//   { name: "Manage Locksmith", icon: Key, component: <ManageLocksmith /> },
//   { name: "Manage Customer", icon: Users, component: <ManageCustomer /> },
//   { name: "Transaction Details", icon: Wallet, component: <TransactionTable /> },
//   { name: "Car Key Details", icon: Car, component: <CarKeyDetails /> },
//   { name: "Statistics Reports", icon: BarChart2, component: <StatisticsReports /> },

// ];

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const [expandedMenu, setExpandedMenu] = useState(null);

//   const handleMenuClick = (item) => {
//     if (item.subMenu) {
//       setExpandedMenu(expandedMenu === item.name ? null : item.name);
//     } else {
//       setActiveTab(item.name);
//     }
//   };

//   const ActiveComponent = menuItems
//     .flatMap((item) => (item.subMenu ? item.subMenu : item))
//     .find((subItem) => subItem.name === activeTab)?.component;

//   return (
//     <div className="container-fluid">
//       <div className="row dashboard-container">
//         {/* Sidebar */}
//         <div className="col-md-3 col-lg-2 sidebar">
//           <div className="brand">LockQuick</div>
//           <div className="menu">
//             {menuItems.map((item) => (
//               <div key={item.name}>
//                 <button
//                   onClick={() => handleMenuClick(item)}
//                   className={`menu-item ${activeTab === item.name ? "active" : ""}`}
//                 >
//                   <item.icon size={18} /> {item.name}
//                   {item.subMenu &&
//                     (expandedMenu === item.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
//                 </button>
//                 {item.subMenu && expandedMenu === item.name && (
//                   <div className="submenu">
//                     {item.subMenu.map((subItem) => (
//                       <button
//                         key={subItem.name}
//                         onClick={() => setActiveTab(subItem.name)}
//                         className={`submenu-item ${activeTab === subItem.name ? "active" : ""}`}
//                       >
//                         {subItem.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="col-md-9 col-lg-10 main-content">
//           <div className="card">
//             <div className="card-body">{ActiveComponent}</div>
//           </div>
//           <div className="footer">Copyright © 2025</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { Home, Wrench, ChevronDown, ChevronUp, Key, Users, Car, Wallet, BarChart2, LogOut } from "lucide-react";
import CreateService from "../Service/CreateService";
import ManageLocksmith from "../LockSmith/ManageLocksmith";
import ManageCustomer from "../Customer/ManageCustomer";
import ManageService from "../Service/ManageService";
import TransactionTable from "../Transaction/Transaction";
import StatisticsReports from "../StatisticsReports/StatisticsReports";
import CarKeyDetails from "../CarKeyDetails/CarKeyDetails";
import ServiceRules from "../ServiceRules/ServiceRules";
import SetCommission from "../Commission/Commission";
import ViewServices from "../Service/ViewService";
import ApproveService from "../Service/ApproveService";


const DashboardHome = () => <div>Welcome to Admin Dashboard</div>;

const menuItems = [
  { name: "Dashboard", icon: Home, component: <DashboardHome /> },
  { name: "My Profile", icon: Home, component: <DashboardHome /> },

  {
    name: "Manage Service",
    icon: Wrench,
    subMenu: [
      { name: "Create Service", component: <CreateService /> },
      { name: "Update Service", component: <ManageService /> },
      // { name: "Update Rules", component: <ServiceRules /> },
      { name: "View Services", component: <ViewServices /> },
      { name: "Approve Services", component: <ApproveService /> },

    ],
  },
  { name: "Manage Locksmith", icon: Key, component: <ManageLocksmith /> },
  { name: "Manage Customer", icon: Users, component: <ManageCustomer /> },
  { name: "Set Commission", icon: Users, component: <SetCommission /> },

  // { name: "Transaction Details", icon: Wallet, component: <TransactionTable /> },
  // { name: "Car Key Details", icon: Car, component: <CarKeyDetails /> },
  // { name: "Statistics Reports", icon: BarChart2, component: <StatisticsReports /> },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [expandedMenu, setExpandedMenu] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    if (item.subMenu) {
      setExpandedMenu(expandedMenu === item.name ? null : item.name);
    } else {
      setActiveTab(item.name);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    navigate("/");
  };

  const ActiveComponent = menuItems
    .flatMap((item) => (item.subMenu ? item.subMenu : item))
    .find((subItem) => subItem.name === activeTab)?.component;

  return (
    <div className="container-fluid">
      <div className="row dashboard-container">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 sidebar">
          <div className="brand">LockQuick</div>
          <div className="menu">
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`menu-item ${activeTab === item.name ? "active" : ""}`}
                >
                  <item.icon size={18} /> {item.name}
                  {item.subMenu && (expandedMenu === item.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
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
          {/* Logout Button */}
          <button onClick={handleLogout} className="logout-button">
            <LogOut size={18} /> Logout
          </button>
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

export default Dashboard;
