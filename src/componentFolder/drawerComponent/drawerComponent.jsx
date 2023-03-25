import React from "react";
import { Drawer, IconButton } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import clsx from "clsx";
import useStyles from "./drawerComponent.styled";

const SideDrawer = (props) => {
  const { navDrawerOpen, toggleNavDrawer, drawerLeft } = props;
  const classes = useStyles();
  const { drawerClose, drawerOpen } = classes;

  return (
    <>
      <Drawer
        anchor={drawerLeft ? "left" : "right"}
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
            color="white"
            style={{ marginLeft: 245 }}
            onClick={() => toggleNavDrawer()}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </div>
      </Drawer>
    </>
  );
};

export default SideDrawer;
