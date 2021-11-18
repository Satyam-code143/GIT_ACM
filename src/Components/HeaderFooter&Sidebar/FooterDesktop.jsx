import React from "react";
import { useStyles } from "../../Styles/DesktopHeaderFooter&Sidebar";
import Aos from "aos";
import "aos/dist/aos.css";
import ACMF from "../../Resources/Images/ACMF.png";
import { Grid } from "@material-ui/core";

function FooterDesktop() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      style={{ backgroundColor: "#192160", height: "15vh", marginBottom: 0 }}
    >
      <img src={ACMF} alt="FootLogo" width="30%" />
    </Grid>
  );
}

export default FooterDesktop;
