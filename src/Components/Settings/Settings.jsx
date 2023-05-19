import React, { Fragment } from "react";
import './Settings.css'
import { Header, Footer } from "../../Components"
import useWindowDimensions from "../../Hooks/useWindowDimensions"
import SettingsDesk from "./SettingsDesk";
import SettingsMobi from "./SettingsMobi";

const Settings = () => {

  const { screenWidth, screenHeight } = useWindowDimensions();

  return (
    <>
      <Header isProfile={true} disabled />
      {screenWidth <= 790 ? <SettingsMobi /> : <SettingsDesk />}
      <Footer isProfile={true} />
    </>
  );
};

export default Settings;
