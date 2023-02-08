import React from "react";
import greyHoodie from "../greyHoodie.jpg";
import whiteHoodie from "../whiteHoodie.jpg";
import blackHoodie1 from "../blackHoodie1.jpg";
import useStyles from "./hoodieLanding.styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { IconButton } from "@material-ui/core";
// import Typography from "@mui/material/Typography";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
// import { CardActionArea } from "@mui/material";

const LandingPage = () => {
  const classes = useStyles();
  const cardData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const slideLeft = () => {
    console.log("in slider");
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollleft - 500;
  };
  return (
    <div>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            background: "linear-gradient(to right, #36454F, grey)",
            width: "30%",
            height: "370px",
          }}
        >
          <img
            src={blackHoodie1}
            alt="Logo"
            style={{
              width: "225px",
              borderRadius: 3,
              marginTop: 70,
              marginLeft: 115,
              maxWidth: 460,
            }}
          />
        </div>
        <div
          style={{
            width: "40%",
            height: "370px",
            background: "linear-gradient(to right, black, white)",
          }}
        >
          <img
            src={whiteHoodie}
            alt="Logo"
            style={{
              width: "270px",
              borderRadius: 3,
              marginTop: 40,
              marginLeft: 180,
              maxWidth: 615,
            }}
          />
        </div>
        <div
          style={{
            width: "30%",
            height: "370px",
            background: "linear-gradient(to right, grey, #36454F)",
          }}
        >
          <img
            src={greyHoodie}
            alt="Logo"
            style={{
              width: "225px",
              borderRadius: 3,
              marginTop: 70,
              marginLeft: 115,
              maxWidth: 460,
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: 10,
          overflowX: "scroll",
        }}
      >
        <IconButton
          aria-label="Open drawer"
          color="white"
          onClick={() => slideLeft()}
          style={{ fontSize: 40 }}
        >
          <ArrowBackIosNewOutlinedIcon
            onClick={() => slideLeft()}
            style={{ color: "black" }}
          />
        </IconButton>
        <div
          id="slider"
          style={{
            width: "100%",
            height: "100%",
            whiteSpace: "nowrap",
            scrollBehavior: "smooth",
            display: "flex",
          }}
        >
          {cardData.map((val) => {
            return (
              <div
                // id="slider"
                style={{
                  display: "flex",
                }}
              >
                <Card>
                  <CardMedia
                    style={{ width: 220, height: 200 }}
                    component="img"
                    className={classes.img}
                    image={val.img}
                    alt="/"
                  />
                </Card>
              </div>
            );
          })}
        </div>
        <IconButton
          aria-label="Open drawer"
          color="black"
          onClick={() => slideLeft()}
          style={{ fontSize: 40 }}
        >
          <ArrowForwardIosOutlinedIcon
            onClick={() => slideLeft()}
            style={{ color: "black" }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default LandingPage;
