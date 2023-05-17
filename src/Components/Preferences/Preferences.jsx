import React, { Fragment } from "react";
import './Preferences.css'
import { Header, Footer } from ".."
import useWindowDimensions from "../../Hooks/useWindowDimensions"
import PreferencesDesk from "./PreferencesDesk";
import PreferencesMobi from "./PreferencesMobi";

const Preferences = () => {

  const { screenWidth, screenHeight } = useWindowDimensions();

  return (
    <>
      <Header isProfile={true} disabled />
      {screenWidth <= 790 ? <PreferencesMobi /> : <PreferencesDesk />}
      <Footer isProfile={true} />
    </>
  );
};

export default Preferences;
