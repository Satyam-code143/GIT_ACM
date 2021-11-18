import React from "react";
import { makeStyles } from "@material-ui/core";
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
    display: "flex",
    flexDirection: "column",
    marginBottom: "10%",
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
        </div>
      </div>
    </>
  );
}

export default DesktopCommonComponent;
