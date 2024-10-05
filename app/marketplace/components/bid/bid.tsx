import "./bid.css";
import React from "react";
import NFT from "./images/NFT.svg";
import Avatar from "./images/Avatar.svg";
import Image from "next/image";

const Bid = ({ displayMode }: { displayMode: string }) => {
  const Panel = () => (
    <div className="checkbox">
      <input type="checkbox" id="select-item" aria-label="Select item" />
      <div className="nft--container">
        <Image className="nft-image" src={NFT} alt="NFT item" />
        <div className="nft--details">
          <div className="nft-name">Cute Cube Cool</div>
          <div>John Abraham</div>
        </div>
      </div>
      <div>20.50 SOL</div>
      <div>20.50 SOL</div>
      <div className="offer-container">
        <Image src={Avatar} alt="User avatar" />
        <div>20.50 SOL</div>
      </div>
      <div>2 Hours 1 Min 30s</div>
      <div
        role="button"
        tabIndex={0}
        aria-label="Remove item"
        className="remove-item"
      >
        X
      </div>
    </div>
  );

  const bidClass = displayMode === "dark" ? "bids--container" : "bids--container-lm";
  const panelClass = displayMode === "dark" ? "activity--panel" : "activity--panel-lm";

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
        <button type="button" className="place-bid-button">
          Place a Bid
        </button>
      </div>
      <div className="activity--container">
        <div className="activity--label">
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
          {[...Array(8)].map((_, index) => (
            <Panel key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Bid;
