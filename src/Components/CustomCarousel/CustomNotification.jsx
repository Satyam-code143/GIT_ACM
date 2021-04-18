import React from "react";
import { Carousel } from "react-responsive-carousel";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../Resources/Images/Image1.jpg";
import Image2 from "../../Resources/Images/Image2.jpg";
import Image3 from "../../Resources/Images/Image3.jpg";
import Image4 from "../../Resources/Images/Image4.jpg";
import { IconButton, makeStyles } from "@material-ui/core";

const useStyles = {
  position: "relative",
  //   zIndex: 2,
  //   top: "calc(100%)",
  width: 68,
  height: 68,
  cursor: "pointer",
  backgroundColor: "#2053A0",
  color: "#fff",
  borderRadius: 27,
};

function CustomNotification({ imgStyle, imgDivStyle }) {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      //   renderArrowPrev={(onClickHandler, hasPrev, label) =>
      //     hasPrev && (
      //       <IconButton
      //         type="button"
      //         onClick={onClickHandler}
      //         title={label}
      //         style={{ ...useStyles }}
      //       >
      //         <ArrowBackIcon />
      //       </IconButton>
      //     )
      //   }
      //   renderArrowNext={(onClickHandler, hasNext, label) =>
      //     hasNext && (
      //       <IconButton
      //         type="button"
      //         onClick={onClickHandler}
      //         title={label}
      //         style={{ ...useStyles }}
      //       >
      //         <ArrowForwardIcon />
      //       </IconButton>
      //     )
      //   }
    >
      <div className={imgDivStyle}>
        <img alt="pic1" src={Image1} className={imgStyle} />
      </div>
      <div className={imgDivStyle}>
        <img alt="pic2" src={Image2} className={imgStyle} />
      </div>
      <div className={imgDivStyle}>
        <img alt="pic3" src={Image3} className={imgStyle} />
      </div>
      <div className={imgDivStyle}>
        <img alt="pic3" src={Image4} className={imgStyle} />
      </div>
    </Carousel>
  );
}

export default CustomNotification;
