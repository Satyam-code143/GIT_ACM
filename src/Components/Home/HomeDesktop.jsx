import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "../../Styles/DesktopStyles";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import Aos from "aos";
import "aos/dist/aos.css";
import GIT_IMAGE from "../../Resources/Images/GIT_IMAGE.jpg";
import CustomNotification from "../CustomCarousel/CustomNotification";
import Custom3dCarousel from "../CustomCarousel/Custom3dCarousel";
import api from "../../Api/api";

function HomeDesktop() {
  const classes = useStyles();
  const [baseImage, setBaseImage] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1000 });
    async function getData() {
      const response = await api.get("api/home/notification");
      const image = response.data[0].img.data;
      const img = new Buffer.from(image).toString("base64");
      setBaseImage(img);
    }
    getData();
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
              data-aos="fade-down"
              data-aos-delay={500}
            >
              ACM GIT
            </Typography>
            <Typography
              variant="h2"
              color="initial"
              className={classes.subTitle}
              data-aos="fade-down"
              data-aos-delay={500}
            >
              Students Chapter
            </Typography>
          </div>
          <Paper
            elevation={12}
            className={classes.imgPaper}
            data-aos="fade-down"
            data-aos-delay={500}
          >
            <CustomCarousel
              imgStyle={classes.imageProp}
              imgDivStyle={classes.imgDiv}
            />
          </Paper>
        </div>
        <div className={classes.container2}>
          <div className={classes.content1}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.contentSub}
              data-aos="fade-up"
            >
              about
            </Typography>
            <Typography
              variant="h2"
              color="initial"
              className={classes.contentMain}
              data-aos="fade-up"
            >
              ACM GIT
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className={classes.contentTypo}
              data-aos="fade-up"
            >
              Consequat ex voluptate qui commodo eiusmod et labore sit. Velit et
              culpa ut dolore veniam quis sint consequat laborum quis commodo
              nostrud est. Ipsum incididunt exercitation est minim pariatur ad
              duis labore ut. Amet aute tempor cillum est est id sunt voluptate
              laboris exercitation. Excepteur laborum incididunt reprehenderit
              officia do. Non excepteur laboris eiusmod culpa sunt ipsum mollit
              irure labore in officia commodo do.
            </Typography>
          </div>
          <Paper className={classes.imgwithContentPaper} data-aos="fade-right">
            <img
              src={`data:image/png;base64,${baseImage}`}
              className={classes.imgwithContent}
              alt="GIT"
            />
          </Paper>
        </div>
        <div className={classes.container2}>
          <Paper className={classes.imgwithContentPaper} data-aos="fade-left">
            <img src={GIT_IMAGE} className={classes.imgwithContent} alt="GIT" />
          </Paper>
          <div className={classes.content1}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.contentTypo}
              data-aos="fade-up"
            >
              Consequat ex voluptate qui commodo eiusmod et labore sit. Velit et
              culpa ut dolore veniam quis sint consequat laborum quis commodo
              nostrud est. Ipsum incididunt exercitation est minim pariatur ad
              duis labore ut. Amet aute tempor cillum est est id sunt voluptate
              laboris exercitation. Excepteur laborum incididunt reprehenderit
              officia do. Non excepteur laboris eiusmod culpa sunt ipsum mollit
              irure labore in officia commodo do.
            </Typography>
          </div>
        </div>
        <div className={classes.container3}>
          <div className={classes.content2}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.contentSubNotification}
              data-aos="fade-up"
            >
              recent
            </Typography>

            <Paper
              elevation={12}
              className={classes.notificationPaper}
              data-aos="fade-up"
            >
              <Typography
                variant="h2"
                color="initial"
                className={classes.contentMainNotification}
              >
                Notifications
              </Typography>
              <CustomNotification
                imgStyle={classes.imagePropNotification}
                imgDivStyle={classes.imgDivNotification}
              />
            </Paper>
          </div>
        </div>
        <div className={classes.container4}>
          <div className={classes.content3}>
            <Typography
              variant="h2"
              color="initial"
              className={classes.contentSubEvent}
              data-aos="fade-up"
            >
              upcoming
            </Typography>

            <Typography
              variant="h2"
              color="initial"
              className={classes.contentMainEvent}
              data-aos="fade-up"
            >
              Events
            </Typography>
            <div className={classes.eventCarousel} data-aos="fade-up">
              <Custom3dCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDesktop;