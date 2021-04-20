import React, { useEffect, useState } from "react";
import { useStyles } from "../../Styles/DesktopStyles";
import { motion } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Image from "../../Resources/Images/Image1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const TeamList = [
  {
    id: 0,
    name: "Prof. Shreevatsa Perur",
    prof: "Something",
    img: "",
  },
  {
    id: 1,
    name: "Anirudh Gudi",
    prof: "Something",
    img: "",
  },
  {
    id: 2,
    name: "Prof. Shrivatsa Perur",
    prof: "Something",
    img: "",
  },
  {
    id: 3,
    name: "Prof. Shrivatsa Perur",
    prof: "Something",
    img: "",
  },
  {
    id: 4,
    name: "Prof. Shrivatsa Perur",
    prof: "Something",
    img: "",
  },
];

function HomeDesktop() {
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
                  src={Image}
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
                src={Image}
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

export default HomeDesktop;
