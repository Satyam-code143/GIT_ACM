import React, { useEffect, useState } from "react";
import { useStyles } from "../../Styles/DesktopStyles";
import { motion } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Image from "../../Resources/Images/Image1.jpg";
import AD from "../../Resources/Images/AD.jpg";
import SP from "../../Resources/Images/SP.jpg";
import VR from "../../Resources/Images/VR.jpg";
import SU from "../../Resources/Images/SU.jpg";
import Sid from "../../Resources/Images/Sid.jpg";
import SND from "../../Resources/Images/SND.jpg";
import RK from "../../Resources/Images/RK.jpg";
import PTJ from "../../Resources/Images/PTJ.jpg";
import Mish from "../../Resources/Images/Mish.jpg";
import SDR from "../../Resources/Images/SDR.jpg";
import AK from "../../Resources/Images/AK.jpg";
import MZ from "../../Resources/Images/MZ.jpg";
import AT from "../../Resources/Images/AT.jpg";
import JP from "../../Resources/Images/JP.jpg";
import SDP from "../../Resources/Images/SDP.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const TeamList = [
  {
    id: 0,
    name: "Prof. Shreevatsa Perur",
    prof: "Faculty Coordinator",
    img: SDP,
  },
  {
    id: 1,
    name: "Anirudh Gudi",
    prof: "Chair",
    img: AD,
  },
  {
    id: 2,
    name: "Saher Patait",
    prof: "Vice Chair",
    img: SP,
  },
  {
    id: 3,
    name: "Vaishnavi Rajoli",
    prof: "Treasurer",
    img: VR,
  },
  {
    id: 4,
    name: "Pratiksha T J",
    prof: "Publicity Coordinator and Web Admin",
    img: PTJ,
  },
  {
    id: 5,
    name: "Siddhi Redekar",
    prof: "Content Writer",
    img: SDR,
  },
  {
    id: 6,
    name: "Siddhant H",
    prof: "Graphic Designer",
    img: Sid,
  },
  {
    id: 7,
    name: "Shruti Mishra",
    prof: "Graphic Designer",
    img: Mish,
  },
  {
    id: 8,
    name: "Soundarya Puranik",
    prof: "Marketing Head",
    img: SU,
  },
  {
    id: 9,
    name: "Atharva M",
    prof: "Management Head",
    img: AT,
  },
  {
    id: 10,
    name: "Anoushka Kulkarni",
    prof: "Technical Head",
    img: AK,
  },
  {
    id: 11,
    name: "Manohar Zalki",
    prof: "Technical Head",
    img: MZ,
  },
  {
    id: 12,
    name: "Rohan K",
    prof: "Web Team",
    img: RK,
  },
  {
    id: 13,
    name: "Satyam N Dodmani",
    prof: "Web Master",
    img: SND,
  },
  {
    id: 14,
    name: "Pratik Jain",
    prof: "Web UI Designer",
    img: JP,
  },
];

function TeamDesktop() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
    // async function getData() {
    //   const response = await api.get("api/home/notification");
    //   const image = response.data[0].img.data;
    //   const img = new Buffer.from(image).toString("base64");
    // }
    // getData();
  }, []);
  const [showFlag, setShowFlag] = useState({ flag: false, id: "" });
  return (
    <>
      <Grid container style={{ width: "100%" }}>
        <Typography
          variant="h2"
          color="initial"
          className={classes.teamSub}
          data-aos="fade-up"
        >
          our
        </Typography>
        <Typography
          variant="h2"
          color="initial"
          className={classes.teamMain}
          data-aos="fade-up"
        >
          Team
        </Typography>
        <motion.div className={classes.firstContainer}>
          {TeamList.filter((item) => item.id === 0).map(
            ({ id, name, prof, img }) => (
              <Paper
                elevation={3}
                className={classes.teamPaper}
                component={motion.div}
                key={id}
                data-aos="fade-up"
              >
                <motion.img
                  src={img}
                  alt="Student Image"
                  className={classes.teamProfileImage}
                  initial={{ y: -40 }}
                  whileHover={{ y: -80, scale: 1.1 }}
                  onHoverStart={(e, action) => {
                    setShowFlag({
                      ...showFlag,
                      flag: true,
                      id: id,
                    });
                  }}
                  onHoverEnd={(e, action) => {
                    setShowFlag({
                      ...showFlag,
                      flag: false,
                      id: "",
                    });
                  }}
                />
                <motion.div className={classes.teamContent} initial={{ y: 75 }}>
                  <Typography
                    variant="h6"
                    color="initial"
                    className={classes.nameStyle}
                  >
                    {name}
                  </Typography>
                  {showFlag.flag && showFlag.id === id ? (
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      className={classes.descriptionStyle}
                    >
                      ( {prof} )
                    </Typography>
                  ) : null}
                </motion.div>
              </Paper>
            )
          )}
        </motion.div>
        <motion.div className={classes.secondContainer}>
          {TeamList.slice(1).map(({ id, name, prof, img }) => (
            <Paper
              elevation={3}
              className={classes.teamPaper}
              component={motion.div}
              key={id}
              data-aos="fade-up"
            >
              <motion.img
                src={img}
                alt="Student Image"
                className={classes.teamProfileImage}
                initial={{ y: -40 }}
                whileHover={{ y: -80, scale: 1.1 }}
                onHoverStart={(e, action) => {
                  setShowFlag({
                    ...showFlag,
                    flag: true,
                    id: id,
                  });
                }}
                onHoverEnd={(e, action) => {
                  setShowFlag({
                    ...showFlag,
                    flag: false,
                    id: "",
                  });
                }}
              />
              <motion.div className={classes.teamContent} initial={{ y: 75 }}>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.nameStyle}
                >
                  {name}
                </Typography>
                {showFlag.flag && showFlag.id === id ? (
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    className={classes.descriptionStyle}
                  >
                    ( {prof} )
                  </Typography>
                ) : null}
              </motion.div>
            </Paper>
          ))}
        </motion.div>
      </Grid>
    </>
  );
}

export default TeamDesktop;
