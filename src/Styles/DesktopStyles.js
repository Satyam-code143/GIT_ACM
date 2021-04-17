import { makeStyles } from "@material-ui/core/styles";

const width = window.screen.width;
const height = window.screen.height;

export const useStyles = makeStyles({
  rootContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  container1: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
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
    fontFamily: "Futura Extra",
    color: "#1D266C",
    fontSize: 100,
  },
  subTitle: {
    position: "absolute",
    zIndex: 2,
    top: "calc(60%)",
    left: "15%",
    fontFamily: "Futura Extra",
    color: "#F79852",
    fontSize: 50,
  },
  imgPaper: {
    width: "70%",
    height: 484,
    borderRadius: 62,
    marginRight: 40,
  },
  imageProp: {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    borderRadius: 62,
  },
  imgDiv: {
    width: "100%",
    height: 484,
  },
  container2: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "10%",
    alignItems: "center",
  },
  imgwithContentPaper: {
    width: "30%",
    // height: 400,
    borderRadius: 40,
    alignSelf: "flex-end",
  },
  imgwithContent: {
    width: "100%",
    // height: 420,
    borderRadius: 40,
  },
  content1: {
    width: "60%",
  },
  contentSub: {
    fontFamily: "Futura Extra",
    color: "#F79852",
    fontSize: 50,
  },
  contentMain: {
    fontFamily: "Futura Extra",
    color: "#1D266C",
    fontSize: 70,
  },
  contentTypo: {
    fontFamily: "Arya",
    fontSize: 25,
    // overflow: "",
  },
});
