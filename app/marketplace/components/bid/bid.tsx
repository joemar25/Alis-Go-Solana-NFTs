import React from "react"; // Import React for JSX support
import "./bid.css";
import NFT from "./images/NFT.svg";
import Avatar from "./images/Avatar.svg";
import Image from "next/image";

const Panel = ({ nftName, author, price, recentOffer, timeLeft, index }: {
  nftName: string;
  author: string;
  price: string;
  recentOffer: string;
  timeLeft: string;
  index: number;
}) => (
  <div className="checkbox">
    <label htmlFor={`select-item-${index}`} className="sr-only">Select item {nftName}</label>
    <input
      type="checkbox"
      id={`select-item-${index}`}
      aria-labelledby={`nft-name-${index}`}
      name={`select-item-${index}`}
    />
    <div className="nft--container">
      <Image className="nft-image" src={NFT} alt={`NFT item by ${author}`} />
      <div className="nft--details" id={`nft-name-${index}`}>
        <div className="nft-name">{nftName}</div>
        <div>{author}</div>
      </div>
    </div>
    <div>{price}</div>
    <div>{recentOffer}</div>
    <div className="offer-container">
      <Image src={Avatar} alt="User avatar" />
      <div>{recentOffer}</div>
    </div>
    <div>{timeLeft}</div>
    <div
      role="button"
      tabIndex={0}
      aria-label={`Remove item ${nftName}`}
      className="remove-item"
      onClick={() => alert(`Removing item: ${nftName}`)}
    >
      X
    </div>
  </div>
);

const Bid = ({ displayMode }: { displayMode: string }) => {
  const bidClass = displayMode === "dark" ? "bids--container" : "bids--container-lm";
  const panelClass = displayMode === "dark" ? "activity--panel" : "activity--panel-lm";

  const panelData = Array.from({ length: 8 }).map((_, index) => ({
    nftName: `Cute Cube Cool #${index + 1}`,
    author: "John Abraham",
    price: "20.50 SOL",
    recentOffer: "20.50 SOL",
    timeLeft: "2 Hours 1 Min 30s",
    index,
  }));

  return (
    <main className={bidClass}>
      <div>
        <h1>Bids</h1>
        <div className="label--container">
          <div>Welcome to Bids</div>
          <div className="breadcrumb">
            <div className="breadcrumb-item">Home</div>
            <div>{`>`}</div>
            <div className="breadcrumb-item">Bids</div>
          </div>
        </div>
      </div>
      <div className="spacer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="activity--container-label">
        <h1>Active Bids</h1>
        <button type="button" className="place-bid-button" aria-label="Place a new bid">
          Place a Bid
        </button>
      </div>
      <div className="activity--container">
        <div className="activity--label">
          <label htmlFor="select-all" className="sr-only">Select all items</label>
          <input type="checkbox" id="select-all" aria-label="Select all items" />
          <div>Item List</div>
          <div>Open Price</div>
          <div>Your Offer</div>
          <div>Recent Offer</div>
          <div>Time Left</div>
          <div className="action-label">Action</div>
        </div>
        <div className="activity--div"></div>
        <div className={`panel--container ${panelClass}`}>
          {panelData.map((data) => (
            <Panel
              key={data.index}
              nftName={data.nftName}
              author={data.author}
              price={data.price}
              recentOffer={data.recentOffer}
              timeLeft={data.timeLeft}
              index={data.index}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Bid;
