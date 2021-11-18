import React, { useEffect } from "react";
import { useStyles } from "../../Styles/DesktopStyles";
import { motion } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import E1 from "../../Resources/Images/E1.jpg";
import E2 from "../../Resources/Images/E2.jpg";
import E3 from "../../Resources/Images/E3.jpg";
import E4 from "../../Resources/Images/E4.jpg";
import E5 from "../../Resources/Images/E5.jpg";
import E6 from "../../Resources/Images/E6.jpg";
import E7 from "../../Resources/Images/E7.jpg";
import E8 from "../../Resources/Images/E8.jpg";
import E9 from "../../Resources/Images/E9.jpg";

const TeamList = [
  {
    id: 0,
    img: E1,
  },
  {
    id: 1,
    img: E2,
  },
  {
    id: 2,
    img: E3,
  },
  {
    id: 3,
    img: E4,
  },
  {
    id: 4,
    img: E5,
  },
  {
    id: 5,
    img: E6,
  },
  {
    id: 6,
    img: E7,
  },
  {
    id: 7,
    img: E8,
  },
  {
    id: 8,
    img: E9,
  },
];

function EventsDesktop() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Grid container style={{ width: "100%" }}>
        <Typography
          variant="h2"
          color="initial"
          className={classes.teamSub}
          data-aos="fade-up"
        >
          past
        </Typography>
        <Typography
          variant="h2"
          color="initial"
          className={classes.teamMain}
          data-aos="fade-up"
        >
          Events
        </Typography>
        <motion.div className={classes.secondContainer}>
          {TeamList.map(({ id, img }) => (
            <Paper
              elevation={6}
              style={{
                width: 400,
                height: 450,
                marginTop: "3rem",
                marginRight: "1rem",
              }}
              component={motion.div}
              key={id}
              data-aos="fade-up"
            >
              <img src={img} alt={id} width="100%" height="100%" />
            </Paper>
          ))}
        </motion.div>
      </Grid>
    </>
  );
}

export default EventsDesktop;
