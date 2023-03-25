import React, { useState } from "react";
import SideDrawer from "./drawerComponent/drawerComponent";
import { IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import tigeenLogo from "./drawerComponent/tigeen_computing_logo.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MovieIcon from "@mui/icons-material/Movie";

const useStyle = makeStyles({
  indicator: {
    top: "0px",
    height: 50,
  },
});

const Home = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [drawerLeft, setDrawerLeft] = useState(false);
  const [value, setValue] = useState("one");
  const [footerValue, setFooterValue] = useState("Movie");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleNavDrawer = (position) => {
    if (position === "left") {
      setDrawerLeft(true);
    } else {
      setDrawerLeft(false);
    }
    setNavDrawerOpen(!navDrawerOpen);
  };

  const handleFooterValChange = (event, newValue) => {
    setFooterValue(newValue);
  };

  const classes = useStyle();

  return (
    <div>
      <div>
        <div
          style={{ backgroundColor: "royalblue", height: 50, display: "flex" }}
        >
          <div>
            <IconButton
              aria-label="Open drawer"
              style={{ color: "white" }}
              onClick={() => toggleNavDrawer("left")}
            >
              <MenuIcon />
            </IconButton>
            <SideDrawer
              drawerLeft={drawerLeft}
              navDrawerOpen={navDrawerOpen}
              setNavDrawerOpen={setNavDrawerOpen}
              toggleNavDrawer={() => toggleNavDrawer()}
            />
          </div>
          <div>
            <img
              src={tigeenLogo}
              alt="Logo"
              style={{
                width: "225px",
              }}
            />
          </div>
          <div style={{ marginLeft: "auto" }}>
            <IconButton
              aria-label="Open drawer"
              style={{ color: "white" }}
              onClick={() => toggleNavDrawer("right")}
            >
              <MenuIcon />
            </IconButton>
            <SideDrawer
              drawerLeft={drawerLeft}
              navDrawerOpen={navDrawerOpen}
              setNavDrawerOpen={setNavDrawerOpen}
              toggleNavDrawer={() => toggleNavDrawer()}
            />
          </div>
        </div>
        <Box sx={{ width: "100%", backgroundColor: "royalblue" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              sx: {
                bgcolor: "white",
                height: "3px",
                borderRadius: 1,
              },
            }}
            aria-label="wrapped label tabs example"
          >
            <Tab value="one" label="TAB ONE" style={{ color: "white" }} />
            <Tab value="two" label="TAB TWO" style={{ color: "white" }} />
            <Tab value="three" label="TAB THREE" style={{ color: "white" }} />
          </Tabs>
        </Box>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 50,
          backgroundColor: "grey",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: "auto" }}>
          <IconButton
            aria-label="Open drawer"
            style={{ color: "white" }}
            onClick={() => toggleNavDrawer("left")}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            drawerLeft={drawerLeft}
            navDrawerOpen={navDrawerOpen}
            setNavDrawerOpen={setNavDrawerOpen}
            toggleNavDrawer={() => toggleNavDrawer()}
          />
        </div>
        <div style={{ marginLeft: "auto", marginRight: "auto", marginTop: 2 }}>
          <Tabs
            value={footerValue}
            onChange={handleFooterValChange}
            classes={{
              indicator: classes.indicator,
            }}
            TabIndicatorProps={{
              sx: {
                bgcolor: "white",
                height: "3px",
                borderRadius: 1,
              },
            }}
            aria-label="icon position tabs example"
          >
            <Tab
              icon={<EmailIcon style={{ color: "white" }} />}
              iconPosition="start"
              style={{ color: "white" }}
              label="Mails"
              value="Mail"
            />
            <Tab
              icon={<AccessAlarmIcon style={{ color: "white" }} />}
              iconPosition="start"
              style={{ color: "white" }}
              label="Alarms"
              value="Alarm"
            />
            <Tab
              icon={<MovieIcon style={{ color: "white" }} />}
              iconPosition="start"
              style={{ color: "white" }}
              label="Movies"
              value="Movie"
            />
          </Tabs>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <IconButton
            aria-label="Open drawer"
            style={{ color: "white" }}
            onClick={() => toggleNavDrawer("right")}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            drawerLeft={drawerLeft}
            navDrawerOpen={navDrawerOpen}
            setNavDrawerOpen={setNavDrawerOpen}
            toggleNavDrawer={() => toggleNavDrawer()}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
