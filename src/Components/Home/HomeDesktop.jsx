import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "../../Styles/DesktopStyles";
import CustomCarousel from "../CustomCarousel/CustomCarousel";

function HomeDesktop() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.rootContainer}>
        <div className={classes.container1}>
          <div className={classes.overlayContainer}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.mainTitle}
            >
              ACM GIT
            </Typography>
            <Typography
              variant="h2"
              color="initial"
              className={classes.subTitle}
            >
              Students Chapter
            </Typography>
          </div>
          <Paper elevation={12} className={classes.imgPaper}>
            <CustomCarousel
              imgStyle={classes.imageProp}
              imgDivStyle={classes.imgDiv}
            />
          </Paper>
        </div>
      </div>
    </>
  );
}

export default HomeDesktop;
