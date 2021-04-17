import React from "react";
import HomeDesktop from "./HomeDesktop";
import DesktopCommonComponent from "../CommonDesktopComponent/DesktopCommonComponent";

function Home() {
  return (
    <DesktopCommonComponent>
      <HomeDesktop />
    </DesktopCommonComponent>
  );
}

export default Home;
