import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Grid, CardActionArea, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SideNavigationDrawer from "../AppWithAuth/navigationDrawer";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FirstTab from "./tabComponents/firstTab";
import Assignment from "./tabComponents/assignment";
import { questionsArray } from "./tabComponents/table.constants";

const Navbar = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = React.useState("FirstTab");
  // const [cardDetails, setCardDetails] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [firstArray, setArrayValue] = React.useState(questionsArray);

  const getDatafromUrl = async () => {
    let res = await axios.get(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    );
    const data = [...res.data, ...res.data];
    setItems(data);
  };

  useEffect(() => {
    getDatafromUrl();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = (val) => {
    setOpen(!open);
  };
  // console.log(currentQuestion);
  const handleNext = () => {
    // setSelectedValue(event.target.value)
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };
  const handlePrev = () => {
    // setSelectedValue(event.target.value)
    const prevQuestion = currentQuestion - 1;
    setCurrentQuestion(prevQuestion);
  };

  const handleSelection = (opts) => {
    const newArr = firstArray.map((value) => {
      // console.log(value.options.radio1 === opts.radio);
      return {
        ...value,
        options: value.options.map((option) => {
          return {
            ...option,
            isChecked: option.radio1 === opts.radio1 ? true : option.isChecked,
          };
        }),
      };
    });
    setArrayValue(newArr);
    // console.log(opts);
  };
  const [hoveredCard, setHoveredCard] = React.useState();

  const handleMouseEnter = (val) => {
    setOpen(true);
    setHoveredCard(val);
  };
  console.log(hoveredCard);

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          aria-label="Open drawer"
          color="inherit"
          onClick={() => toggleNavDrawer()}
        >
          <MenuIcon />
        </IconButton>
        <SideNavigationDrawer
          navDrawerOpen={navDrawerOpen}
          setNavDrawerOpen={setNavDrawerOpen}
          toggleNavDrawer={() => toggleNavDrawer()}
          setValue={setValue}
        />
        <Box
          sx={{
            width: "100%",
            background: "black",
          }}
        >
          <Tabs
            style={{ justifyContent: "flex-end" }}
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab
              label="Item One"
              value="FirstTab"
              style={{
                color: "white",
                background: value === "FirstTab" ? "blueViolet" : "",
              }}
            />
            <Tab
              label="Item Two"
              value="SecondTab"
              style={{
                color: "white",
                background: value === "SecondTab" ? "blueViolet" : "",
              }}
            />
            <Tab
              label="Item Three"
              value="ThirdTab"
              style={{
                color: "white",
                background: value === "ThirdTab" ? "blueViolet" : "",
              }}
            />
            <Tab
              label="Assignment"
              value="Assignment"
              style={{
                color: "white",
                background: value === "Assignment" ? "blueViolet" : "",
              }}
            />
          </Tabs>
        </Box>
      </div>
      {value === "SecondTab" && (
        <div
          style={{
            marginLeft: "30%",
            marginTop: "25px",
            width: "600px",
            height: "400px",
            backgroundColor: "beige",
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              marginLeft: "200px",
              fontSize: "xx-large",
              fontStyle: "oblique",
              fontFamily: "auto",
            }}
          >
            CustomerService
          </div>
          <div
            style={{
              fontSize: "24px",
              fontStyle: "oblique",
              fontFamily: "auto",
              fontWeight: "bold",
              marginLeft: "200px",
            }}
          >
            {`${firstArray[currentQuestion].question}${
              currentQuestion + 1
            }${"/3"}`}
          </div>
          <div style={{ display: "grid", paddingLeft: "200px" }}>
            {firstArray[currentQuestion].options.map((opts) => (
              <div style={{ paddingTop: "16px" }}>
                <Button
                  style={{
                    border: "2px solid blue",
                    width: "200px",
                    boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
                    textDecorationColor: "coral",
                    backgroundColor:
                      opts.isChecked === true ? "chartreuse" : "",
                  }}
                  checked={opts.isChecked === true}
                  size="small"
                  onClick={() => handleSelection(opts)}
                >
                  {opts.radio1}
                </Button>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "12px" }}>
            {currentQuestion !== 0 && (
              <Button
                style={{
                  border: "3px solid firebrick",
                  width: "200px",
                  textDecorationColor: "coral",
                  borderRadius: "30px",
                }}
                onClick={handlePrev}
              >
                Prev Question
              </Button>
            )}
            {currentQuestion !== 2 && (
              <Button
                style={{
                  marginLeft: "200px",
                  border: "3px solid firebrick",
                  width: "200px",
                  textDecorationColor: "coral",
                  borderRadius: "30px",
                  float: "right",
                }}
                onClick={handleNext}
              >
                Next Question
              </Button>
            )}
            {currentQuestion === 2 && (
              <Button
                style={{
                  marginLeft: "200px",
                  border: "3px solid firebrick",
                  width: "200px",
                  textDecorationColor: "coral",
                  borderRadius: "30px",
                  float: "right",
                }}
                // onClick={handleNext}
              >
                Submit Answers
              </Button>
            )}
          </div>
        </div>
      )}
      {value === "ThirdTab" && (
        <div>
          <Grid
            // style={{ display: "flex", justifyContent: "center" }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            container
            spacing={2}
          >
            {/* {isOpen && Modal()} */}
            {items?.map((val) => (
              <Card
                sx={{
                  width: 500,
                  height: 480,
                  marginLeft: 25,
                  marginTop: 8.5,
                }}
                onClick={() => handleMouseEnter(val)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="220"
                    image={val.thumbnail.large}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.content}
                    </Typography>
                    <Typography
                      style={{ marginTop: 12 }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {val.author.name}
                      {"-"}
                      {val.author.role}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" onClick={() => handleClick(val)}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
          <Modal
            open={open}
            onClose={handleClick}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CardMedia
                component="img"
                height="220"
                image={hoveredCard?.thumbnail.small}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {hoveredCard?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hoveredCard?.content}
                </Typography>
                <Typography
                  style={{ marginTop: 12 }}
                  variant="body2"
                  color="text.secondary"
                >
                  {hoveredCard?.author.name}
                  {"-"}
                  {hoveredCard?.author.role}
                </Typography>
              </CardContent>
            </Box>
          </Modal>
        </div>
      )}
      {value === "FirstTab" && (
        <div style={{ marginTop: 50, marginLeft: 50 }}>
          <FirstTab />
        </div>
      )}
      {value === "Assignment" && (
        <div style={{ marginTop: 20, marginLeft: 10 }}>
          <Assignment />
        </div>
      )}
    </>
  );
};

export default Navbar;
