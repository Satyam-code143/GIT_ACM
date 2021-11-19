import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  //Sidebar
  sideSocialBar: {
    width: 90,
    height: "100vh",
    backgroundColor: "rgba(29, 38, 108, 1)",
  },
  container1: {
    width: "100%",
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  container2: {
    width: "100%",
    height: 302,
  },
  emptyContainer: {
    width: "100%",
  },
  socialIconContainer: {
    width: "100%",
    height: 202,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  //Header
  appbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    position: "fixed",
    background: "white",
    zIndex: 10,
    height: 100,
  },
  logoContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  navLinkContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  //Footer
  mainFooterContainer: {
    width: "100%",
    height: "10vh",
    backgroundColor: "#192160",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // paddingTop: 40,
    marginTop: "4rem",
  },
  footerContainer1: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
  },
  footerContainer2: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
  },
}));
