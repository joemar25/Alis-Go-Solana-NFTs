import React, { useEffect, useState } from "react";
import Image from "next/image";
import NFT from "./images/NFT.svg";
import Avatar from "./images/Avatar.svg";

const Panel = ({
    nftName,
    author,
    price,
    recentOffer,
    timeLeft,
    index,
}: {
    nftName: string;
    author: string;
    price: string;
    recentOffer: string;
    timeLeft: string;
    index: number;
}) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="checkbox">
            <label htmlFor={`select-item-${index}`} className="sr-only">
                Select item {nftName}
            </label>
            <input
                type="checkbox"
                id={`select-item-${index}`}
                aria-labelledby={`nft-name-${index}`}
                name={`select-item-${index}`}
            />
            <div className="nft--container">
                {isClient && (
                    <Image
                        className="nft-image"
                        src={NFT}
                        alt={`NFT item by ${author}`}
                        unoptimized
                    />
                )}
                <div className="nft--details" id={`nft-name-${index}`}>
                    <div className="nft-name">{nftName}</div>
                    <div>{author}</div>
                </div>
            </div>
            <div>{price}</div>
            <div>{recentOffer}</div>
            <div className="offer-container">
                {isClient && (
                    <Image src={Avatar} alt="User avatar" unoptimized />
                )}
                <div>{recentOffer}</div>
            </div>
            <div>{timeLeft}</div>
            <div
                role="button"
                tabIndex={0}
                aria-label={`Remove item ${nftName}`}
                className="remove-item"
                onClick={() => alert(`Removing item: ${nftName}`)}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        alert(`Removing item: ${nftName}`);
                    }
                }}
            >
                X
            </div>
        </div>
    );
};

export default Panel;
