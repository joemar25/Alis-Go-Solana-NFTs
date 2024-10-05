import "./settings.css";
import pfp from "../header/images/Avatar.svg";

import Image from "next/image";

const Settings = ({ displayMode }: { displayMode: string }) => {
  const settingsContainer = displayMode === "dark" ? "settings--container" : "settings--container-lm";
  const userInfoClass = displayMode === "dark" ? "user-info" : "user-info-lm";
  const updateProfileClass = displayMode === "dark" ? "update-profile" : "update-profile-lm";
  const personalInfoClass = displayMode === "dark" ? "personal--info" : "personal--info-lm";

  return (
    <main className={settingsContainer}>
      <div className="page-header">
        <h4>Settings</h4>
        <div className="label--container">
          <div>Welcome to your Settings</div>
          <div className="breadcrumb">
            <div>Home</div>
            <div>{`>`}</div>
            <div>Settings</div>
          </div>
        </div>
      </div>
      <div className="settings" role="navigation">
        <div className="selector--item selected">Profile</div>
        <div className="selector--item">Application</div>
        <div className="selector--item">Security</div>
        <div className="selector--item">Activity</div>
        <div className="selector--item">Payment Method</div>
        <div className="selector--item">API</div>
      </div>
      <div className="user-update--container">
        <div className="user--container">
          <h4 className="label">User profile</h4>
          <div className={userInfoClass}>
            <div>
              <label htmlFor="full-name">Full name</label>
              <input id="full-name" type="text" aria-label="Full name" />
              <div className="pfp-container">
                <Image src={pfp} alt="Profile picture of Jane Doe" />
                <div className="user-details">
                  <h5>Jane Doe</h5>
                  <div>Welcome to the settings page</div>
                </div>
              </div>
              <button type="button" aria-label="Save profile information">Save</button>
            </div>
          </div>
        </div>
        <div className="profile--container">
          <h4 className="label">Update profile</h4>
          <div className={updateProfileClass}>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" aria-label="Email" />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" aria-label="Password" />
            </div>
            <button type="button" aria-label="Save updated profile information">Save</button>
          </div>
        </div>
      </div>
      <div className={personalInfoClass}>
        <h4>Personal Information</h4>
        <div className="info--container">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="info-item">
              <label htmlFor={`info-${index}`}>Info</label>
              <input id={`info-${index}`} type="text" aria-label={`Info ${index + 1}`} />
            </div>
          ))}
          <button type="button" aria-label="Save personal information">Save</button>
        </div>
      </div>
    </main>
  );
};

export default Settings;
