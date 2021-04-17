import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "../../Styles/DesktopStyles";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

function HomeDesktop() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.rootContainer}>
        <div className={classes.container1}>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => (
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
                )}
              </Spring>
            )}
          </VisibilitySensor>
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
