import React, { useEffect } from "react";
import { useStyles } from "../../Styles/DesktopStyles";
import { motion } from "framer-motion";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
import G1 from "../../Resources/Images/G1.jpg";
import G2 from "../../Resources/Images/G2.jpg";
import G3 from "../../Resources/Images/G3.jpg";
import G4 from "../../Resources/Images/G4.jpg";
import G5 from "../../Resources/Images/G5.jpg";
import G6 from "../../Resources/Images/G6.jpg";
// import G7 from "../../Resources/Images/G7.jpg";
// import G8 from "../../Resources/Images/G8.jpg";
// import G9 from "../../Resources/Images/G9.jpg";

const TeamList = [
  {
    id: 0,
    img: G1,
  },
  {
    id: 1,
    img: G2,
  },
  {
    id: 2,
    img: G3,
  },
  {
    id: 3,
    img: G4,
  },
  {
    id: 4,
    img: G5,
  },
  {
    id: 5,
    img: G6,
  },
];

function Gallery() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Grid
      container
      style={{
        width: "100%",
        marginTop: 100,
      }}
    >
      <Typography
        variant="h2"
        color="initial"
        className={classes.teamMain}
        data-aos="fade-up"
      >
        Mahesh Foundation
      </Typography>
      <motion.div className={classes.secondContainer} style={{ marginTop: 0 }}>
        {TeamList.map(({ id, img }) => (
          <Paper
            elevation={6}
            style={{
              width: 500,
              height: 350,
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
  );
}

export default Gallery;
