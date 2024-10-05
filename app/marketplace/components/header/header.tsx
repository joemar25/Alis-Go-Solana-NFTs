"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Notifications from "./images/Notifications.svg";
import Avatar from "./images/Avatar.svg";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Returning a fallback during the initial render to prevent hydration errors
    return (
      <header className="flex items-center justify-between py-4 px-6 bg-gray-800 shadow-md">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search"
          className="rounded-lg p-2 w-1/3 text-gray-900"
        />
        <div className="flex items-center space-x-4">
          {/* Placeholder for theme icon to avoid mismatch */}
          <div className="w-6 h-6 bg-gray-500 rounded-full" />
          <div className="w-6 h-6 bg-gray-500 rounded-full" />
        </div>
      </header>
    );
  }

  const ICON_SIZE = 18;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-gray-800 dark:bg-gray-900 shadow-md">
      <input
        type="search"
        placeholder="Search..."
        aria-label="Search"
        className="rounded-lg p-2 w-1/3 text-gray-900"
      />
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center justify-center p-2 rounded-full transition-colors hover:bg-gray-700"
        >
          {theme === "light" ? (
            <Sun size={ICON_SIZE} className="text-yellow-500" />
          ) : (
            <Moon size={ICON_SIZE} className="text-gray-400" />
          )}
        </button>
        {mounted && (
          <>
            <Image src={Notifications} alt="Notifications" aria-label="View Notifications" unoptimized />
            <Image src={Avatar} alt="User Avatar" aria-label="User Profile" unoptimized />
          </>
        )}
        <WalletMultiButton aria-label="Connect Wallet" />
        <WalletDisconnectButton aria-label="Disconnect Wallet" />
      </div>
    </header>
  );
};

export { Header };
