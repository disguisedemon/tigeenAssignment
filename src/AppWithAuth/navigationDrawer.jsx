import React from "react";
import { Drawer, IconButton } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import clsx from "clsx";
import useStyles from "./navigationDrawerStyled";
import Button from "@mui/material/Button";

const SideNavigationDrawer = (props) => {
  const { navDrawerOpen, toggleNavDrawer, setValue } = props;
  const classes = useStyles();
  const { drawerClose, drawerOpen } = classes;

  const handleClick = () => {
    setValue("ThirdTab");
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
        <div className={classes.toolBar}>
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
            textDecorationColor: "coral",
            borderRadius: "3px",
          }}
          onClick={handleClick}
        >
          Set Tab
        </Button>
      </Drawer>
    </>
  );
};

export default SideNavigationDrawer;
