import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../../Styles/DesktopHeaderFooter&Sidebar";
import images from "../../Resources/Images/ACM_LOGO.png";
// import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const ButtonNames = [
  {
    id: 0,
    name: "Home",
    to: "",
  },
  {
    id: 1,
    name: "Our Team",
    to: "",
  },
  {
    id: 2,
    name: "Events",
    to: "",
  },
  {
    id: 3,
    name: "Gallery",
    to: "",
  },
  {
    id: 4,
    name: "Blogs",
    to: "",
  },
];

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function DesktopHeader() {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 20 },
  }));

  return (
    <nav className={classes.appbar}>
      <animated.div
        className={classes.logoContainer}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
      >
        <img src={images} className={classes.logoContainer} alt="ACM LOGO" />
      </animated.div>
      <div className={classes.navLinkContainer}>
        {ButtonNames.map(({ id, name, to }) => (
          <Button
            key={id}
            type="text"
            // component={Link}
            component={animated.button}
            to={to}
            className={classes.navButton}
            style={{
              fontSize: 14,
              color: "#000",
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
              },
              fontFamily: "Biryani",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Button>
        ))}
      </div>
    </nav>
  );
}

export default DesktopHeader;
