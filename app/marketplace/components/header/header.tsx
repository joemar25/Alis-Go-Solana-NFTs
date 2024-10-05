import "./header.css";

import Display from "./images/darkDisplay.svg";
import lmDisplay from "./images/lightDisplay.svg";
import Notifications from "./images/Notifications.svg";
import Avatar from "./images/Avatar.svg";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import Image from "next/image";

interface HeaderProps {
  displayMode: 'dark' | 'light';
  setDisplayMode: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}

const Header: React.FC<HeaderProps> = ({
  displayMode,
  setDisplayMode,
}) => {
  const handleClick = () => {
    setDisplayMode(displayMode === "dark" ? "light" : "dark");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  const displayIcon = displayMode === "dark" ? Display : lmDisplay;
  const searchClass = displayMode === "dark" ? "search" : "search-lm";

  return (
    <header className="header--container">
      <input className={searchClass} type="search" placeholder="Search..." aria-label="Search" />
      <div className="img--container">
        <Image
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          src={displayIcon}
          alt="Toggle Display Mode"
          role="button"
          tabIndex={0}
          aria-label={`Switch to ${displayMode === "dark" ? "light" : "dark"} mode`}
        />
        <Image src={Notifications} alt="Notifications" aria-label="View Notifications" />
        <Image src={Avatar} alt="User Avatar" aria-label="User Profile" />
        <WalletMultiButton aria-label="Connect Wallet" />
        <WalletDisconnectButton aria-label="Disconnect Wallet" />
      </div>
    </header>
  );
};

export default Header;
