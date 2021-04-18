import React from "react";
import { useStyles } from "../../Styles/DesktopHeaderFooter&Sidebar";
import Aos from "aos";
import "aos/dist/aos.css";

function FooterDesktop() {
  const classes = useStyles();

  return (
    <footer className={classes.mainFooterContainer}>
      <div className={classes.footerContainer1}>
        <ul>
          <li>ACM Mission & Vision</li>
          <li>ACM Library</li>
          <li>Publishing</li>
          <li>Events</li>
          <li>Local Activities</li>
        </ul>
      </div>
      <div className={classes.footerContainer2}></div>
    </footer>
  );
}

export default FooterDesktop;
