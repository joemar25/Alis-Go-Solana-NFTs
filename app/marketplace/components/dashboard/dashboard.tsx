import React, { useEffect, useState } from "react";
import Trending from "../trending/trending";
import Featured from "./images/Featured.svg";
import Avatar from "./images/Avatar.svg";
import Image from "next/image";

// Unified type for NFTs
type NFT = {
  id: string;
  title: string;
  author: string;
  auctionTime: string;
  currentBid: string;
  price: string;
  image: string;
}[];

const Dashboard = ({ data }: { data: NFT }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="p-6">
      <div className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">
            Discover, Collect, Sell, and Create your NFT
          </h1>
          <p className="text-lg mb-4">
            Digital marketplace for crypto collectibles and non-fungible tokens
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Explore
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Create
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 md:mt-0">
          {isClient && (
            <>
              <Image
                className="rounded-lg"
                src={Featured}
                alt="Featured NFT image"
                unoptimized
              />
              <div className="flex items-center mt-4">
                <Image src={Avatar} alt="Avatar of NFT creator John Abraham" unoptimized />
                <span className="ml-2 text-sm">John Abraham</span>
              </div>
            </>
          )}
          <div className="mt-2 text-lg font-semibold">Brighten LQ</div>
          <div className="flex justify-between w-full mt-2 text-sm">
            <div>Auction Time: 3h 1m 50s</div>
            <div>Current Bid: 20 SOL</div>
          </div>
        </div>
      </div>
      <Trending data={data} />
    </main>
  );
};

export default Dashboard;
