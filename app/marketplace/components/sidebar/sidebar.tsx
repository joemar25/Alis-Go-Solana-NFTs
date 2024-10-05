import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./sidebar.css";

import Logo from "./images/Logo.svg";
import DashboardIcon from "./images/DashBoard.svg";
import BidIcon from "./images/Bid.svg";
import CollectionIcon from "./images/Collection.svg";
import ProfileIcon from "./images/Profile.svg";
import SettingsIcon from "./images/Settings.svg";
import LogoutIcon from "./images/Logout.svg";
import selectedDashboard from "./images/selectedDashBoard.svg";
import selectedBid from "./images/selectedBid.svg";
import selectedCollection from "./images/selectedCollection.svg";
import selectedProfile from "./images/selectedProfile.svg";

type ComponentName = 'Dashboard' | 'Bid' | 'Collection' | 'Profile' | 'Settings';

interface SidebarProps {
  selectedComponent: ComponentName;
  changeComponent: (component: ComponentName) => void;
}

interface NavItem {
  name: ComponentName;
  icon: string;
  selectedIcon: string;
  label: string;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: DashboardIcon, selectedIcon: selectedDashboard, label: 'Dashboard' },
  { name: 'Bid', icon: BidIcon, selectedIcon: selectedBid, label: 'Bidding' },
  { name: 'Collection', icon: CollectionIcon, selectedIcon: selectedCollection, label: 'Collection' },
  { name: 'Profile', icon: ProfileIcon, selectedIcon: selectedProfile, label: 'User Profile' },
  { name: 'Settings', icon: SettingsIcon, selectedIcon: SettingsIcon, label: 'Settings' },
];

const Sidebar: React.FC<SidebarProps> = ({ selectedComponent, changeComponent }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="sb--container dark:bg-gray-800 bg-white" aria-label="Main Navigation">
      <div className="sb--icon-container">
        {isClient && (
          <div id="logo">
            <Image src={Logo} alt="Company Logo" unoptimized />
          </div>
        )}
        <ul id="menu" role="menu">
          {navItems.map((item) => (
            <li key={item.name} role="none">
              <button
                type="button"
                onClick={() => changeComponent(item.name)}
                aria-label={item.label}
                aria-current={selectedComponent === item.name ? "page" : undefined}
                role="menuitem"
              >
                {isClient && (
                  <Image
                    src={selectedComponent === item.name ? item.selectedIcon : item.icon}
                    alt=""
                    unoptimized
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
        <div id="logout">
          {isClient && (
            <button type="button" aria-label="Logout">
              <Image src={LogoutIcon} alt="" unoptimized />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
