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

const Header = ({
  displayMode,
  setDisplayMode,
}: {
  displayMode: string;
  setDisplayMode: Function;
}) => {
  const handleClick = () => {
    if (displayMode === "dark") {
      setDisplayMode("light");
    } else {
      setDisplayMode("dark");
    }
  };

  const displayIcon = displayMode === "dark" ? Display : lmDisplay;
  const searchClass = displayMode === "dark" ? "search" : "search-lm";

  return (
    <header className="header--container">
      <input className={searchClass} type="search" placeholder="Search..." />
      <div className="img--container">
        <Image
          onClick={handleClick}
          src={displayIcon}
          alt="Toggle Display Mode"
          role="button"
          tabIndex={0}
        />
        <Image src={Notifications} alt="Notifications" />
        <Image src={Avatar} alt="User Avatar" />
        <WalletMultiButton />
        <WalletDisconnectButton />
      </div>
    </header>
  );
};

export default Header;
