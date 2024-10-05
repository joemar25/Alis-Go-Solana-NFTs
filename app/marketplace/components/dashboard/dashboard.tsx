import "./dashboard.css";
import Trending from "../trending/trending";
import Featured from "./images/Featured.svg";
import Avatar from "./images/Avatar.svg";

import Image from "next/image";

type NFTData = {
  id: string;
  title: string;
  author: string;
  auctionTime: string;
  currentBid: string;
  price: string;
}[];

const Dashboard = ({
  displayMode,
  data,
}: {
  displayMode: string;
  data: NFTData;
}) => {
  // Utility function to return classes based on displayMode
  const getClassNames = (baseClass: string) =>
    displayMode === "dark" ? baseClass : `${baseClass}-lm`;

  return (
    <main className={getClassNames("cont--container")}>
      <div className="discover--container">
        <div className="discover">
          <div className={getClassNames("disc--title")}>
            Discover, Collect, Sell, and Create your NFT
          </div>
          <div className="desc">
            Digital marketplace for crypto collectibles and non-fungible tokens
          </div>
          <div className="button--container">
            <button type="button" className="discover-button" aria-label="Explore NFTs">
              Explore
            </button>
            <button type="button" className="create-button" aria-label="Create NFT">
              Create
            </button>
          </div>
        </div>
        <div className={getClassNames("featured")}>
          <Image className="featured-image" src={Featured} alt="Featured NFT image" />
          <div className="ft--container">
            <div className="ft--user-container">
              <Image src={Avatar} alt="Avatar of NFT creator John Abraham" />
              <div>John Abraham</div>
              <div className="status-indicator" aria-label="Online status"></div>
            </div>
            <div className="ft--title">Brighten LQ</div>
            <div className="ft--auction">
              <div>Auction time</div>
              <div className="current-bid">
                <div>Current Bid</div>
                <div>:</div>
                <div className="bid-value">1.50 SOL</div>
              </div>
            </div>
            <div className="vals">
              <div>3h 1m 50s</div>
              <div>20 SOL</div>
            </div>
            <div className="button--container">
              <button type="button" className="place-bid-button" aria-label="Place a Bid on Brighten LQ">
                Place a Bid
              </button>
              <button type="button" className="details-button" aria-label="View Details about Brighten LQ">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="label">
        <div>Trending Bids</div>
        <div className="selector">
          <button type="button" className="selector--item selected" aria-label="Show All Bids">
            All
          </button>
          <button type="button" className="selector--item" aria-label="Show Artwork Bids">
            Artwork
          </button>
          <button type="button" className="selector--item" aria-label="Show Music Bids">
            Music
          </button>
        </div>
      </div>
      <Trending displayMode={displayMode} data={data} />
    </main>
  );
};

export default Dashboard;
