import React from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import "./card.css";
import NFT from "./images/NFT.svg";
import Image from "next/image";

type CardProps = {
  title?: string;
  image?: string;
  floor_price?: string;
};

const Card: React.FC<CardProps> = ({ title, image, floor_price }) => {
  const formattedPrice = floor_price
    ? (Number(floor_price) / LAMPORTS_PER_SOL).toFixed(2)
    : "20.00";

  const isAnimatedImage = image?.endsWith(".gif");

  return (
    <div className="card--container dark:bg-gray-800 dark:text-white bg-white text-black">
      <div className="nft-image-container">
        <Image
          width={125}
          height={125}
          src={image ? image : NFT}
          alt={title ? `${title} NFT image` : "NFT image"}
          unoptimized={isAnimatedImage}
        />
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
        <div>{formattedPrice} SOL</div>
      </div>
      <button
        type="button"
        className="bid-button"
        aria-label={`Place a bid on ${title || "Liquid Wave"}`}
      >
        Place a Bid
      </button>
    </div>
  );
};

export default Card;
