import React from "react";
import { Divider, makeStyles, Typography } from "@material-ui/core";
import DesktopSidebar from "../HeaderFooter&Sidebar/DesktopSidebar";
import DesktopHeader from "../HeaderFooter&Sidebar/DesktopHeader";

const useStyles = makeStyles({
  rootContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  subContainer: {
    width: "100%",
    marginLeft: 90,
    display: "flex",
    flexDirection: "column",
  },
});

function DesktopCommonComponent(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.rootContainer}>
        <DesktopSidebar />
        <div className={classes.subContainer}>
          <DesktopHeader />
          {props.children}
          <footer
            style={{
              width: "100%",
              height: "10vh",
              backgroundColor: "rgba(29, 38, 108, 1)",
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Divider
              style={{ background: "#fff", marginTop: "3rem", width: "100%" }}
            />
            <Typography variant="subtitle1" style={{ color: "#fff" }}>
              &copy; 2021 ACM GIT
            </Typography>
          </footer>
        </div>
      </div>
    </>
  );
}

export default DesktopCommonComponent;
