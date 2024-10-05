import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./sidebar.css";

import Logo from "./images/Logo.svg";
import DashboardIcon from "./images/DashBoard.svg";
import BidIcon from "./images/Bid.svg";
import CollectionIcon from "./images/Collection.svg";
import ProfileIcon from "./images/Profile.svg";
import SettingsIcon from "./images/Settings.svg";
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
}

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: DashboardIcon, selectedIcon: selectedDashboard },
  { name: 'Bid', icon: BidIcon, selectedIcon: selectedBid },
  { name: 'Collection', icon: CollectionIcon, selectedIcon: selectedCollection },
  { name: 'Profile', icon: ProfileIcon, selectedIcon: selectedProfile },
  { name: 'Settings', icon: SettingsIcon, selectedIcon: SettingsIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ selectedComponent, changeComponent }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="sb--container bg-white dark:bg-gray-900 shadow-lg h-full py-8 px-4 w-20 fixed left-0 top-0">
      <div className="sb--icon-container flex flex-col items-center space-y-6">
        {isClient && (
          <div className="mb-8">
            <Image src={Logo} alt="Company Logo" unoptimized className="w-10 h-10" />
          </div>
        )}
        <ul id="menu" role="menu" className="space-y-4 w-full">
          {navItems.map((item) => (
            <li key={item.name} role="none">
              <button
                type="button"
                onClick={() => changeComponent(item.name)}
                aria-current={selectedComponent === item.name ? "page" : undefined}
                role="menuitem"
                className={`flex items-center justify-center w-full p-2 rounded-md transition-colors hover:bg-blue-500`}
              >
                {isClient && (
                  <Image
                    src={selectedComponent === item.name ? item.selectedIcon : item.icon}
                    alt={`${item.name} icon`}
                    unoptimized
                    className="w-6 h-6"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
