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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import DoneIcon from "@mui/icons-material/Done";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const useStyle = makeStyles({
  indicator: {
    top: "0px",
    "& .css-h0q0iv-MuiButtonBase-root-MuiTab-root": {
      minHeight: 50,
    },
  },
});

const Home = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [drawerLeft, setDrawerLeft] = useState(false);
  const [value, setValue] = useState("one");
  const [footerValue, setFooterValue] = useState("Movie");

  const labels = [
    { name: "header", label: "I want a Header" },
    { name: "footer", label: "I want a Footer" },
    {
      name: "overlay",
      label: "I want Drawer Overlay Mode (requires Header or Footer)",
    },
    { name: "leftDrawer", label: "I want a left-side Drawer" },
    { name: "rightDrawer", label: "I want a right-side Drawer" },
    {
      name: "navigtaionTabs",
      label: "I want navigation tabs (requires Header)",
    },
    { name: "bottomMenu", label: "I want a Bottom Menu(requires Footer)" },
  ];

  const [state, setState] = React.useState({
    header: true,
    footer: true,
    overlay: true,
    leftDrawer: true,
    rightDrawer: true,
    navigtaionTabs: true,
    bottomMenu: true,
  });

  const handleToggleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

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
          height: 666,
          width: 550,
          boxShadow: 2,
          border: "1px solid grey",
          boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.5)",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div style={{ height: 70 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <div
                style={{
                  margin: "0 10px",
                  display: "flex",
                  borderRadius: "50%",
                  backgroundColor: "royalblue",
                  padding: "1px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EditIcon style={{ color: "white" }} />
              </div>
              <div
                style={{
                  width: "50%",
                  height: "1px",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  margin: "0 10px",
                  display: "flex",
                  borderRadius: "50%",
                  backgroundColor: "royalblue",
                  padding: "1px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SettingsIcon style={{ color: "white" }} />
              </div>
              <div
                style={{
                  width: "50%",
                  height: "1px",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  margin: "0 10px",
                  display: "flex",
                  borderRadius: "50%",
                  backgroundColor: "royalblue",
                  padding: "1px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PlayCircleFilledIcon style={{ color: "white" }} />
              </div>
            </div>
          </div>

          <div style={{ border: "0.5px solid black", width: "100%" }}></div>
          <div
            style={{ marginLeft: "auto", marginRight: "auto", marginTop: 50 }}
          >
            <FormControl>
              <div>I want a Company Logo</div>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                style={{ display: "flex" }}
                checkedIcon={<DoneIcon />}
              >
                <FormControlLabel
                  value="left"
                  control={<Radio />}
                  label="Left"
                />
                <FormControlLabel
                  value="right"
                  control={<Radio />}
                  label="Right"
                />
                <FormControlLabel
                  value="center"
                  control={<Radio />}
                  label="Center"
                />
                <FormControlLabel
                  value="disable"
                  control={<Radio />}
                  label="Disable"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div
            style={{ marginLeft: "auto", marginRight: "auto", marginTop: 20 }}
          >
            <FormControl>
              <div>Preset Color</div>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                style={{ display: "flex" }}
                checkedIcon={<DoneIcon />}
              >
                <FormControlLabel
                  value="blue"
                  control={<Radio />}
                  label="Blue (#1976d2)"
                />
                <FormControlLabel
                  value="red"
                  control={<Radio />}
                  label="Red (#ff0000)"
                />
              </RadioGroup>
              <div>
                Preset apply only: Header, BackGround, RadioButton & Switch
              </div>
            </FormControl>
          </div>
          <div>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                {labels.map((item) => (
                  <FormControlLabel
                    key={item.name}
                    control={
                      <Switch
                        checked={state[item.name]}
                        onChange={handleToggleChange}
                        name={item.name}
                      />
                    }
                    label={item.label}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </div>
          <div style={{ border: "0.5px solid black" }}></div>
          <Button style={{ marginTop: 20 }} variant="contained">
            Continue
          </Button>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 60,
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
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 2,
            height: 58,
          }}
        >
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
              className={classes.indicator}
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
