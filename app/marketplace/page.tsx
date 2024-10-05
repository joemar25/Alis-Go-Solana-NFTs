"use client";

import { useState, useEffect } from "react";
import { NextPage } from "next";
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./components/dashboard/dashboard";
import Bid from "./components/bid/bid";
import Collection from "./components/collection/collection";
import Profile from "./components/profile/profile";
import Settings from "./components/settings/settings";
import { Header } from "./components/header/header";

type NFTData = {
  id: string;
  title: string;
  author: string;
  auctionTime: string;
  currentBid: string;
  price: string;
  image: string;
}[];

type ComponentName = 'Dashboard' | 'Bid' | 'Collection' | 'Profile' | 'Settings';

const Marketplace: NextPage = () => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentName>('Dashboard');
  const [data, setData] = useState<NFTData>([]);

  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const res = await fetch("/api/nftData");
        const result = await res.json();

        const transformedData = result.data.map((nft: any) => ({
          ...nft,
          image: nft.image || "/path/to/default/image.svg",
        }));

        setData(transformedData);
      } catch (error) {
        console.error("Error fetching NFT data:", error);
      }
    };

    fetchNfts();
  }, []);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Dashboard":
        return <Dashboard data={data} />;
      case "Bid":
        return <Bid />;
      case "Collection":
        return <Collection />;
      case "Profile":
        return <Profile />;
      case "Settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar selectedComponent={selectedComponent} changeComponent={setSelectedComponent} />
      <div className="flex-1 p-6">
        <Header />
        {renderComponent()}
      </div>
    </div>
  );
};

export default Marketplace;