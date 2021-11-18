import React, { useState } from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import Carousel from "react-spring-3d-carousel";
import Image1 from "../../Resources/Images/Image1.jpg";
import Image2 from "../../Resources/Images/Image2.jpg";
import Image3 from "../../Resources/Images/Image3.jpg";
import Image4 from "../../Resources/Images/Image4.jpg";

const useStyles = makeStyles(() => ({
  paperContainer: {
    width: 345,
    height: 300,
    borderRadius: 28,
  },
  root: {
    width: 345,
    height: 400,
  },
}));

function Custom3dCarousel() {
  const [goToSlide, setgoToSlide] = useState(0);
  const classes = useStyles();

  const slides = [
    {
      key: 0,
      content: (
        <Box component={Card} boxShadow={12} className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="100%"
              width="100%"
              image={Image1}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Box>
      ),
    },
    {
      key: 1,
      content: (
        <Box component={Card} boxShadow={12} className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="100%"
              width="100%"
              image={Image1}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Box>
      ),
    },
    {
      key: 2,
      content: (
        <Box component={Card} boxShadow={12} className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="100%"
              width="100%"
              image={Image1}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Box>
      ),
    },
    {
      key: 3,
      content: (
        <Box component={Card} boxShadow={12} className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="100%"
              width="100%"
              image={Image1}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Box>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setgoToSlide(index) };
  });
  return (
    <Carousel
      slides={slides}
      goToSlide={goToSlide}
      offsetRadius={2}
      animationConfig={{ tension: 200, friction: 10 }}
    />
  );
}

export default Custom3dCarousel;
