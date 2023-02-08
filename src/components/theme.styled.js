import { makeStyles } from "@material-ui/core/styles";

const useStyles = () =>
  makeStyles((theme) => ({
    themeStyle: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      overflowY: "hidden",
      "& ::-webkit-scrollbar": {
        width: "0.9em",
        height: 0,
      },
    },
    welcomeText: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
  }));

export default useStyles;
