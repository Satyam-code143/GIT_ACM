import React, { useState, useEffect } from "react";
import { useStyles } from "../../Styles/DesktopHeaderFooter&Sidebar";
import { Divider, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useTrail, a } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";

const SocialApp = [
  {
    id: 0,
    component: <InstagramIcon />,
    link: "https://instagram.com/acm_klsgit?utm_medium=copy_link",
  },
  {
    id: 1,
    component: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/acm-student-chapter-klsgit-8bb3bb1ba",
  },
];

function DesktopSidebar(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Aos.init({});
  }, []);

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
      <div className={classes.sideSocialBar} data-aos="fade-right">
        <div className={classes.container1}>
          <div className={classes.emptyContainer}></div>
          <div className={classes.socialIconContainer}>
            {trail.map(({ x, ...rest }, index) => (
              <IconButton
                key={SocialApp[index].id}
                aria-label="ACM_GIT Instagram"
                component={a.a}
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
                href={SocialApp[index].link}
                target="_blank"
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
