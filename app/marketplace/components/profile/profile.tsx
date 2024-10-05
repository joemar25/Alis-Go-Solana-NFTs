import "./profile.css";
import pfp from "../header/images/Avatar.svg";
import Verify from "./images/Verify.svg";
import TWOFA from "./images/2FA.svg";
import Avatar from "./images/Avatar.svg";
import NFT from "../card/images/NFT.svg";

import Image from "next/image";

const Profile = ({ displayMode }: { displayMode: string }) => {
    const unverif = "Looks like you are not verified yet. Verify yourself to use the full potential of NFT Marketplace.";

    const getClassNames = (baseClass: string) =>
        displayMode === "dark" ? baseClass : `${baseClass}-lm`;

    const Following = ({ username, items }: { username: string; items: number }) => (
        <div className={getClassNames("following--container")}>
            <div className="following">
                <Image src={Avatar} alt={`Avatar of ${username}`} />
                <div>
                    <h1>{username}</h1>
                    <div>{items} items</div>
                </div>
            </div>
            <button type="button" aria-label={`Unfollow ${username}`}>
                Unfollow
            </button>
        </div>
    );

    const Purchased = ({ nftName, owner }: { nftName: string; owner: string }) => (
        <div className="purchased-item">
            <Image className="nft-image" src={NFT} alt={`Purchased NFT: ${nftName}`} />
            <Image className="avatar-image" src={Avatar} alt={`Owner avatar: ${owner}`} />
            <h1>{nftName}</h1>
        </div>
    );

    const Collection = ({ collectionName, owner }: { collectionName: string; owner: string }) => (
        <div className="collection-item">
            <Image className="nft-image" src={NFT} alt={`NFT collection item: ${collectionName}`} />
            <Image className="avatar-image" src={Avatar} alt={`Owner avatar: ${owner}`} />
            <h1>{collectionName}</h1>
        </div>
    );

    return (
        <main className={getClassNames("profile--container")}>
            <h1>Profile</h1>
            <div className="label--container">
                <div>Welcome to your Profile</div>
                <div className="breadcrumb">
                    <div>Home</div>
                    <div>{`>`}</div>
                    <div>Profile</div>
                </div>
            </div>
            <div className="account--info">
                <div className={getClassNames("verif--container")}>
                    <Image src={pfp} alt="Profile picture of Jane Doe" />
                    <h1>Welcome, Jane Doe</h1>
                    <div className="verif--desc">{unverif}</div>
                    <div className="verif--action">
                        <Image src={Verify} alt="Verification badge" />
                        <div>Verify account</div>
                    </div>
                    <div className="divider"></div>
                    <div className="verif--action">
                        <Image src={TWOFA} alt="Two-factor authentication setup" />
                        <div>Two-factor Authentication (2FA)</div>
                    </div>
                </div>
                <div>
                    <h1>Following</h1>
                    <div className="following--element-container">
                        {["Papaya", "Mango", "Grapes", "Orange"].map((username, index) => (
                            <Following key={index} username={username} items={60} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="label--container">
                <h1>Recently Purchased NFTs</h1>
            </div>
            <div className="purchase--container">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Purchased key={index} nftName={`Liquid Wave #${index + 1}`} owner="Jane Doe" />
                ))}
            </div>
            <div className="label--container">
                <h1>My Collections</h1>
            </div>
            <div className="collection--container">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Collection key={index} collectionName={`Liquid Wave Collection #${index + 1}`} owner="Jane Doe" />
                ))}
            </div>
        </main>
    );
};

export default Profile;
