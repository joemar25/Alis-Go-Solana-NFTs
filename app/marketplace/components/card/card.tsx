import React from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import "./card.css";
import NFT from "./images/NFT.svg";

import Image from "next/image";

const Card = ({
  title,
  displayMode,
  image,
  floor_price,
}: {
  title?: string;
  displayMode: string;
  image?: string;
  floor_price?: string;
}) => {
  const cardContainerClass = displayMode === "dark" ? "card--container" : "card--container-lm";

  return (
    <div className={cardContainerClass}>
      <div className="nft-image-container self-center rounded-lg h-150px w-150px">
        <Image width={125} height={125} src={image ? image : NFT} alt="NFT image" />
      </div>
      <div className="title">{title || "Liquid Wave"}</div>
      <div className="info--container">
        <div className="info">
          <div>Auction Time</div>
          <div>Current Bid</div>
        </div>
        <div className="bid-value">1.50 SOL</div>
      </div>
      <div className="vals">
        <div>3h 1m 50s</div>
        <div>{floor_price ? (Number(floor_price) / LAMPORTS_PER_SOL).toFixed(2) : "20"} SOL</div>
      </div>
      <button type="button" className="bid-button">Place a Bid</button>
    </div>
  );
};

export default Card;
