import React from "react";
import { Drawer, IconButton } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import clsx from "clsx";
import useStyles from "./navigationDrawerStyled";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const SideNavigationDrawer = (props) => {
  const { navDrawerOpen, toggleNavDrawer } = props;
  const classes = useStyles();
  const { drawerClose, drawerOpen } = classes;
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: "/home",
      state: {
        name: "Sharath",
      },
    });
    toggleNavDrawer();
  };

  return (
    <>
      <Drawer
        anchor="left"
        classes={{
          paper: clsx({
            [drawerOpen]: navDrawerOpen,
            [drawerClose]: !navDrawerOpen,
          }),
        }}
        className={clsx({
          [drawerOpen]: navDrawerOpen,
          [drawerClose]: !navDrawerOpen,
        })}
        open={navDrawerOpen}
        variant="temporary"
      >
        <div>
          <IconButton
            aria-label="Open drawer"
            color="inherit"
            style={{ marginLeft: 245 }}
            onClick={() => toggleNavDrawer()}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </div>

        <Button
          style={{
            marginTop: 10,
            width: "150px",
            color: "black",
            borderRadius: "3px",
          }}
          onClick={handleClick}
        >
          Set Tab
        </Button>
        {/* <Button
          style={{
            marginTop: 10,
            width: "150px",
            color: "black",
            borderRadius: "3px",
          }}
          onClick={() => handleSignOut()}
        >
          Sign Out
        </Button> */}
      </Drawer>
    </>
  );
};

export default SideNavigationDrawer;
