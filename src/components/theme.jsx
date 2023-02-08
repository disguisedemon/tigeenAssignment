import React from "react";
import videoBg from "./Assets/videoBg.mp4";
import useStyles from "./theme.styled";

const Theme = () => {
  const classes = useStyles();

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <video className={classes.themeStyle} src={videoBg} autoPlay loop muted />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: '5%',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "emoji",
        }}
      >
        <h1>Hey There!</h1>
        <p>Welcome To My Website!!!</p>
      </div>
    </div>
  );
};

export default Theme;
