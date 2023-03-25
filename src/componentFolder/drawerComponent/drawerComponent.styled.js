import { makeStyles } from "@material-ui/core/styles";

const sideNavDrawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  hide: {
    display: "none",
  },
  subMenuStyles: {
    marginTop: "-16px",
  },
  drawer: {
    width: sideNavDrawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerDefault: {
    width: sideNavDrawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    "& .MuiBackdrop-root": {
      backgroundcolor: "transparent",
    },
  },
  drawerOpen: {
    width: sideNavDrawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    scrollbarWidth: "thin",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: 56,
  },
}));

export default useStyles;
