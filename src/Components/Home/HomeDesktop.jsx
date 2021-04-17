import React, { useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "../../Styles/DesktopStyles";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import Aos from "aos";
import "aos/dist/aos.css";

function HomeDesktop() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className={classes.rootContainer}>
        <div className={classes.container1}>
          <div className={classes.overlayContainer}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.mainTitle}
              data-aos="fade-up"
              data-aos-delay={500}
            >
              ACM GIT
            </Typography>
            <Typography
              variant="h2"
              color="initial"
              className={classes.subTitle}
              data-aos="fade-up"
              data-aos-delay={500}
            >
              Students Chapter
            </Typography>
          </div>
          <Paper
            elevation={12}
            className={classes.imgPaper}
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <CustomCarousel
              imgStyle={classes.imageProp}
              imgDivStyle={classes.imgDiv}
            />
          </Paper>
        </div>
        <div className={classes.container2}></div>
      </div>
    </>
  );
}

export default HomeDesktop;
