import "./profile.css";
import pfp from "../header/images/Avatar.svg";
import Verify from "./images/Verify.svg";
import TWOFA from "./images/2FA.svg";
import Avatar from "./images/Avatar.svg";
import NFT from "../card/images/NFT.svg";

import Image from "next/image";

const Profile = ({ displayMode }: { displayMode: string }) => {
    const unverif = "Looks like you are not verified yet. Verify yourself to use the full potential of NFT Marketplace.";

    const Following = () => {
        return (
            <div className={followingContainerClass}>
                <div className="following">
                    <Image src={Avatar} alt="Avatar of followed user" />
                    <div>
                        <h1>Papaya</h1>
                        <div>60 items</div>
                    </div>
                </div>
                <button type="button">Unfollow</button>
            </div>
        );
    };

    const Purchased = ({ id }: { id: string }) => {
        return (
            <div id={id} className="purchased-item">
                <Image className="nft-image" src={NFT} alt="Purchased NFT item" />
                <Image className="avatar-image" src={Avatar} alt="Owner avatar" />
                <h1>Liquid Wave</h1>
            </div>
        );
    };

    const Collection = ({ id }: { id: string }) => {
        return (
            <div id={id} className="collection-item">
                <Image className="nft-image" src={NFT} alt="NFT collection item" />
                <Image className="avatar-image" src={Avatar} alt="Owner avatar" />
                <h1>Liquid Wave</h1>
            </div>
        );
    };

    const profileContainerClass = displayMode === 'dark' ? "profile--container" : "profile--container-lm";
    const verifContainerClass = displayMode === 'dark' ? "verif--container" : "verif--container-lm";
    const followingContainerClass = displayMode === 'dark' ? "following--container" : "following--container-lm";
    const purchasedIdPrefix = displayMode === 'dark' ? "purchased" : "purchased-lm";
    const collectionIdPrefix = displayMode === 'dark' ? "collection" : "collection-lm";

    return (
        <main className={profileContainerClass}>
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
                <div className={verifContainerClass}>
                    <Image src={pfp} alt="Profile picture of Jane Doe" />
                    <h1>Welcome, Jane Doe</h1>
                    <div className="verif--desc">
                        {unverif}
                    </div>
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
                        <Following />
                        <Following />
                        <Following />
                        <Following />
                    </div>
                </div>
            </div>

            <div className="label--container">
                <h1>Recently Purchased NFTs</h1>
            </div>
            <div className="purchase--container">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Purchased key={index} id={`${purchasedIdPrefix}-${index}`} />
                ))}
            </div>
            <div className="label--container">
                <h1>My Collections</h1>
            </div>
            <div className="collection--container">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Collection key={index} id={`${collectionIdPrefix}-${index}`} />
                ))}
            </div>
        </main>
    );
};

export default Profile;
