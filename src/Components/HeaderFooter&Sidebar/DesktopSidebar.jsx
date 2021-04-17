import React, { useState, useEffect } from "react";
import { useStyles } from "../../Styles/DesktopHeaderFooter&Sidebar";
import { Divider, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useTrail, a } from "react-spring";
// import { Link } from "react-router-dom";

const SocialApp = [
  {
    id: 0,
    component: <InstagramIcon />,
    link: "",
  },
  {
    id: 1,
    component: <FacebookIcon />,
    link: "",
  },
  {
    id: 2,
    component: <LinkedInIcon />,
    link: "",
  },
];

function DesktopSidebar(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
    return () => {
      setOpen(false);
    };
  }, [open]);

  const trail = useTrail(SocialApp.length, {
    config: { mass: 5, tension: 500, friction: 100 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });

  const classes = useStyles();
  return (
    <>
      <div className={classes.sideSocialBar}>
        <div className={classes.container1}>
          <div className={classes.emptyContainer}></div>
          <div className={classes.socialIconContainer}>
            {trail.map(({ x, ...rest }, index) => (
              <IconButton
                key={SocialApp[index].id}
                aria-label="ACM_GIT Instagram"
                component={a.button}
                style={{
                  ...rest,
                  transform: x.to((x) => `translate3d(0,${x}px,0)`),
                  backgroundColor: "#2053A0",
                  "&:hover": {
                    backgroundColor: "#2053A0",
                  },
                  color: "#FFFF",
                  fontSize: 56,
                }}
              >
                {SocialApp[index].component}
              </IconButton>
            ))}
          </div>
        </div>
        <Divider variant="middle" style={{ height: 1, background: "#fff" }} />
        <div className={classes.container2}></div>
        <Divider variant="middle" style={{ height: 1, background: "#fff" }} />
      </div>
    </>
  );
}

export default DesktopSidebar;
