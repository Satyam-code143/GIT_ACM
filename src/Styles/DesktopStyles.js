import { makeStyles } from "@material-ui/core/styles";

const width = window.screen.width;
const height = window.screen.height;

const flexRow = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
};

const flexColumn = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const subHeading = {
  fontFamily: "Futura Extra",
  fontSize: 50,
};

const mainHeading = {
  fontFamily: "Futura Extra",
  color: "#1D266C",
  textTransform: "uppercase",
};

const imgProp = {
  width: "100%",
  height: "100%",
};

export const useStyles = makeStyles({
  //Home

  rootContainer: {
    ...flexColumn,
  },
  container1: {
    ...flexRow,
    marginRight: 20,
    justifyContent: "space-between",
  },
  overlayContainer: {
    background: "transparent",
  },
  mainTitle: {
    position: "absolute",
    zIndex: 2,
    top: "calc(45%)",
    left: "15%",
    fontSize: 100,
    ...mainHeading,
  },
  subTitle: {
    position: "absolute",
    zIndex: 2,
    top: "calc(60%)",
    left: "15%",
    color: "#F79852",
    ...subHeading,
  },
  imgPaper: {
    width: "70%",
    height: 484,
    borderRadius: 62,
    marginRight: 40,
  },
  imageProp: {
    ...imgProp,
    borderRadius: 62,
  },
  imgDiv: {
    width: "100%",
    height: 484,
  },
  container2: {
    ...flexRow,
    justifyContent: "space-around",
    marginTop: "10%",
    alignItems: "center",
  },
  imgwithContentPaper: {
    width: "30%",
    height: 300,
    borderRadius: 40,
    alignSelf: "flex-end",
  },
  imgwithContent: {
    width: "100%",
    height: 300,
    borderRadius: 40,
  },
  content1: {
    width: "60%",
  },
  contentSub: {
    ...subHeading,
    color: "#F79852",
  },
  contentTypo: {
    fontFamily: "Arya",
    fontSize: 25,
  },
  container3: {
    ...flexRow,
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationPaper: {
    width: "100%",
    height: 350,
    borderRadius: 28,
  },
  content2: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentMain: {
    ...mainHeading,
    fontSize: 70,
  },

  contentSubNotification: {
    ...subHeading,
    color: "rgba(15, 233, 11, 1)",
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  contentMainNotification: {
    ...mainHeading,
    fontSize: 50,
    padding: 10,
  },
  imagePropNotification: {
    ...imgProp,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  imgDivNotification: {
    width: "100%",
    height: 220,
  },
  container4: {
    ...flexRow,
    marginTop: "10%",
  },
  content3: {
    ...flexColumn,
    alignItems: "center",
    justifyContent: "center",
  },
  contentSubEvent: {
    ...subHeading,
    color: " rgba(15, 233, 11, 1)",
    fontSize: 45,
  },
  contentMainEvent: {
    ...mainHeading,
    fontSize: 60,
  },
  eventCarousel: {
    width: "60%",
    height: 500,
  },

  // OurTeam
  teamSub: {
    ...subHeading,
    textAlign: "center",
    width: "100%",
    color: "#F79852",
    fontSize: 70,
  },
  teamMain: {
    ...mainHeading,
    textAlign: "center",
    width: "100%",
  },
  firstContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  teamPaper: {
    width: 390,
    height: 220,
    borderRadius: 25,
    marginBottom: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    background:
      "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(12,6,88,1) 21%, rgba(7,7,100,1) 39%, rgba(8,8,112,1) 70%, rgba(239,239,246,1) 100%)",
  },
  teamProfileImage: {
    width: 322,
    height: 177,
    borderRadius: 25,
  },
  teamContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  nameStyle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFF",
  },
  descriptionStyle: {
    fontWeight: "700",
    color: "#FFFF",
  },
  secondContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    padding: 60,
    flexWrap: "wrap",
  },
});
