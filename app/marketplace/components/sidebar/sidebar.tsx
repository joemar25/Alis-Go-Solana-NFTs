import React from 'react';
import Image from "next/image";
import "./sidebar.css";

// Import all images
import Logo from "./images/Logo.svg";
import Dashboard from "./images/DashBoard.svg";
import Bid from "./images/Bid.svg";
import Collection from "./images/Collection.svg";
import Profile from "./images/Profile.svg";
import Settings from "./images/Settings.svg";
import Logout from "./images/Logout.svg";
import selectedDashboard from "./images/selectedDashBoard.svg";
import selectedBid from "./images/selectedBid.svg";
import selectedCollection from "./images/selectedCollection.svg";
import selectedProfile from "./images/selectedProfile.svg";

// Define types
type ComponentName = 'Dashboard' | 'Bid' | 'Collection' | 'Profile' | 'Settings';
type DisplayMode = 'dark' | 'light';

interface SidebarProps {
  selectedComponent: ComponentName;
  changeComponent: (component: ComponentName) => void;
  displayMode: DisplayMode;
}

interface NavItem {
  name: ComponentName;
  icon: string;
  selectedIcon: string;
  label: string;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: Dashboard, selectedIcon: selectedDashboard, label: 'Dashboard' },
  { name: 'Bid', icon: Bid, selectedIcon: selectedBid, label: 'Bidding' },
  { name: 'Collection', icon: Collection, selectedIcon: selectedCollection, label: 'Collection' },
  { name: 'Profile', icon: Profile, selectedIcon: selectedProfile, label: 'User Profile' },
  { name: 'Settings', icon: Settings, selectedIcon: Settings, label: 'Settings' },
];

const Sidebar: React.FC<SidebarProps> = ({
  selectedComponent,
  changeComponent,
  displayMode,
}) => {
  const containerClass = displayMode === "dark" ? "sb--container" : "sb--container-lm";

  return (
    <nav className={containerClass} aria-label="Main Navigation">
      <div className="sb--icon-container">
        <div id="logo">
          <Image src={Logo} alt="Company Logo" />
        </div>
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
                <Image
                  src={selectedComponent === item.name ? item.selectedIcon : item.icon}
                  alt=""
                />
              </button>
            </li>
          ))}
        </ul>
        <div id="logout">
          <button type="button" aria-label="Logout">
            <Image src={Logout} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;