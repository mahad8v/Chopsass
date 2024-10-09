import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, InventoryIcon, MenuManagementIcon, OrdersIcon, RecordsIcon, ReservationIcon, SettingsIcon, StaffsIcon, SuperAdminIcon } from '../../assets/icons/Icons';
// import { FaChartPie, FaClipboardList, FaCalendarAlt, FaUserFriends, FaUtensils, FaWarehouse, FaMoneyBillWave, FaCogs } from 'react-icons/fa'; // Example icons

const SideBar = () => {
  const Menus = [
    { 
        title: "Super Admin", 
        icon: <SuperAdminIcon width={25} height={25} />,
        path: "/super-admin"
     },
    { 
        title: "Dashboard", 
        icon: <HomeIcon width={25} height={25} />,
        path: "/dashboard"
     },
     
    { 
        title: "Orders",
        icon: <OrdersIcon width={25} height={25}/>,
        path: "/orders"
    },
    { 
        title: "Menu Management", 
        icon: <MenuManagementIcon width={25} height={25}/>,
        path: "/menu-management" 
    },
    { 
        title: "Reservations", 
        icon: <ReservationIcon width={25} height={25} />, 
        path: "/reservations"
    },
    {
        title: "Staff Management",
        icon: <StaffsIcon width={25} height={25} />, 
        path: "/staffs", 
        gap: true
    },
    {
         title: "Inventory", 
         icon: <InventoryIcon width={25} height={25} />, 
         path: "/inventory" 
    },
    {
         title: "Records", 
         icon: <RecordsIcon width={25} height={25} />, 
         path: "/records" 
    },
    {
        title: "Settings", 
        icon: <SettingsIcon width={25} height={25} />, 
        path: "/settings",
         gap: true
    },
  ];

  return (
    <div className="flex">
      <div className="w-72 bg-dark-purple h-screen border-[1px] border-r p-5 pt-8 relative duration-300 bg-[#FFFFFF]">
        <div className="flex gap-x-4 items-center">
          <h1 className="text-[#7069E5] origin-left font-medium text-xl duration-200">
            Restaurant Manager
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index} className={`${Menu.gap ? "mt-4" : "mt-4"}`}>
              <NavLink
                to={Menu.path}
                className={({ isActive }) =>
                  `flex rounded-md p-1 cursor-pointer font-[540] text-sm items-center fill-[#7069E5] gap-x-4  hover:bg-light-white ${
                    isActive ? "bg-light-white bg-[#7069E5] fill-[#fff] text-white p-2" : ""
                  }`
                }
              >
                {Menu.icon}
                <span className="origin-left duration-200">{Menu.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
