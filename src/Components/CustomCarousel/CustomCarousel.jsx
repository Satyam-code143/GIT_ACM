import React from "react";
import { Carousel } from "react-responsive-carousel";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../Resources/Images/Image1.jpg";
import Image2 from "../../Resources/Images/Image2.jpg";
import Image3 from "../../Resources/Images/Image3.jpg";
import Image4 from "../../Resources/Images/Image4.jpg";
import { IconButton } from "@material-ui/core";

const useStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 68,
  height: 68,
  cursor: "pointer",
  backgroundColor: "#2053A0",
  color: "#fff",
  borderRadius: 27,
};

function CustomCarousel({ imgStyle, imgDivStyle }) {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showArrows={true}
      showIndicators={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <IconButton
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...useStyles, display: "none" }}
          >
            <ArrowBackIcon />
          </IconButton>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <IconButton
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...useStyles, right: -15 }}
          >
            <ArrowForwardIcon />
          </IconButton>
        )
      }
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

export default CustomCarousel;
