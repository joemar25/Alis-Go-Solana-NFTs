import React, { useState } from 'react';
import Image from "next/image";
import pfp from "../header/images/Avatar.svg";
import "./settings.css";

interface SettingsProps {
  displayMode: "dark" | "light";
}

type TabName = "Profile" | "Application" | "Security" | "Activity" | "Payment Method" | "API";

const Settings: React.FC<SettingsProps> = ({ displayMode }) => {
  const [selectedTab, setSelectedTab] = useState<TabName>("Profile");

  const getClassNames = (baseClass: string): string =>
    displayMode === "dark" ? baseClass : `${baseClass}-lm`;

  const settingsTabs: TabName[] = ["Profile", "Application", "Security", "Activity", "Payment Method", "API"];

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Profile":
        return (
          <>
            <div className="user-update--container">
              <UserProfile getClassNames={getClassNames} />
              <UpdateProfile getClassNames={getClassNames} />
            </div>
            <PersonalInfo getClassNames={getClassNames} />
          </>
        );
      case "Application":
        return <ApplicationSettings getClassNames={getClassNames} />;
      case "Security":
        return <SecuritySettings getClassNames={getClassNames} />;
      case "Activity":
        return <ActivitySettings getClassNames={getClassNames} />;
      case "Payment Method":
        return <PaymentMethodSettings getClassNames={getClassNames} />;
      case "API":
        return <APISettings getClassNames={getClassNames} />;
    }
  };

  return (
    <main className={getClassNames("settings--container")}>
      {/* ... rest of the component remains the same ... */}
    </main>
  );
};

interface SubComponentProps {
  getClassNames: (baseClass: string) => string;
}

const UserProfile: React.FC<SubComponentProps> = ({ getClassNames }) => {
  const userInfoClass = getClassNames("user-info");

  return (
    <section className="user--container">
      {/* ... component content remains the same ... */}
    </section>
  );
};

const UpdateProfile: React.FC<SubComponentProps> = ({ getClassNames }) => {
  const updateProfileClass = getClassNames("update-profile");

  return (
    <section className="profile--container">
      {/* ... component content remains the same ... */}
    </section>
  );
};

const PersonalInfo: React.FC<SubComponentProps> = ({ getClassNames }) => {
  const personalInfoClass = getClassNames("personal--info");

  return (
    <section className={personalInfoClass}>
      {/* ... component content remains the same ... */}
    </section>
  );
};

const ApplicationSettings: React.FC<SubComponentProps> = ({ getClassNames }) => (
  <section className={getClassNames("application-settings")}>
    <h2>Application Settings</h2>
    {/* Add application settings content here */}
  </section>
);

const SecuritySettings: React.FC<SubComponentProps> = ({ getClassNames }) => (
  <section className={getClassNames("security-settings")}>
    <h2>Security Settings</h2>
    {/* Add security settings content here */}
  </section>
);

const ActivitySettings: React.FC<SubComponentProps> = ({ getClassNames }) => (
  <section className={getClassNames("activity-settings")}>
    <h2>Activity Settings</h2>
    {/* Add activity settings content here */}
  </section>
);

const PaymentMethodSettings: React.FC<SubComponentProps> = ({ getClassNames }) => (
  <section className={getClassNames("payment-settings")}>
    <h2>Payment Method Settings</h2>
    {/* Add payment method settings content here */}
  </section>
);

const APISettings: React.FC<SubComponentProps> = ({ getClassNames }) => (
  <section className={getClassNames("api-settings")}>
    <h2>API Settings</h2>
    {/* Add API settings content here */}
  </section>
);

export default Settings;