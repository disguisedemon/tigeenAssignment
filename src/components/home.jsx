import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { CardActionArea, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SideNavigationDrawer from "../AppWithAuth/navigationDrawer";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FirstTab from "./tabComponents/firstTab";
import Assignment from "./tabComponents/assignment";
import Theme from "./theme";
import Snackbar from "./snackBar";
import "./questionairre.css";

const Navbar = (props) => {
  const { handleSignOut } = props;
  const [items, setItems] = useState([]);
  const [value, setValue] = React.useState("ThemePage");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getDatafromUrl = async () => {
    let res = await axios.get(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    );
    const data = [...res.data, ...res.data, ...res.data, ...res.data];
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
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "What is your favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      id: 2,
      question: "What is your favorite animal?",
      options: ["Dog", "Cat", "Elephant", "Lion"],
    },
    {
      id: 3,
      question: "What is your favorite meal?",
      options: ["Rice", "Roti", "Chapathi", "Chitranna"],
    },
    {
      id: 4,
      question: "What is your favorite sport?",
      options: ["Cricket", "Football", "Hockey", "Kunte-Bille"],
    },
    // Add more questions here
  ];

  const handleOptionSelect = (option) => {
    // Update selected answers in state with selected option
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  const handleNext = () => {
    // Go to next question
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    // Go to previous question
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    // Submit selected answers
    console.log(selectedAnswers);
  };

  const [hoveredCard, setHoveredCard] = React.useState();

  const handleMouseEnter = (val) => {
    setOpen(true);
    setHoveredCard(val);
  };

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
          handleSignOut={() => handleSignOut()}
        />
        <Box
          sx={{
            width: "100%",
            background: "black",
          }}
        >
          <div>
            <Tabs
              style={{ justifyContent: "flex-end", display: "grid" }}
              value={value}
              onChange={handleChange}
              // centered
            >
              <Tab
                label="Theme Page"
                value="ThemePage"
                style={{
                  color: "white",
                  background: value === "ThemePage" ? "blueViolet" : "",
                }}
              />
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
          </div>
        </Box>
      </div>
      {value === "SecondTab" && (
        <div className="questionnaire-container">
          <h1 className="question-title">
            {questions[currentQuestion - 1].question}
          </h1>
          <div className="options-container">
            {questions[currentQuestion - 1].options.map((option) => (
              <button
                key={option}
                className={`option-button ${
                  selectedAnswers[currentQuestion] === option ? "selected" : ""
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-container">
            {currentQuestion > 1 && (
              <button className="previous-button" onClick={handlePrevious}>
                Previous
              </button>
            )}
            {currentQuestion < questions.length ? (
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      )}
      {value === "ThirdTab" && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            width: "100%",
            backgroundColor: "green",
            background: "linear-gradient(to right, red, yellow, green)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        >
          {items?.map((val, index) => (
            <Card
              style={{ margin: "10px", marginLeft: "15px" }}
              sx={{
                width: "30%",
                height: 480,
                width: 420,
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
        <div style={{ display: "flex", alignContent: "center" }}>
          <FirstTab />
        </div>
      )}
      {value === "ThemePage" && <Theme />}

      {value === "Assignment" && (
        <div style={{ marginTop: 20, marginLeft: 10 }}>
          <Assignment />
        </div>
      )}
      <Snackbar />
    </>
  );
};

export default Navbar;
