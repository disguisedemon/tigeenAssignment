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
  toolBar: {
    borderBottom: "0.1em solid #758F7D",
  },
  table: {
    "& .ReactVirtualized__Table__headerColumn:first-of-type": {
      marginLeft: 0,
      paddingLeft: 24,
    },
    "& .ReactVirtualized__Table__headerColumn": {
      marginRight: 0,
      paddingLeft: 24,
    },
    "& .ReactVirtualized__Table__headerRow": {
      display: "flex",
      // backgroundcolor: "grey",
      position: "sticky",
      zIndex: 2,
      top: 20,
      textTransform: "none",
      letterSpacing: "0.4px",
      whiteSpace: "break-spaces",
      fontSize: 20,
      color: "red",
      backgroundColor: "yellow",
      marginTop: 8,
      textAlign: "center",
    },
    "& .ReactVirtualized__Table__row": {
      display: "flex",
      letterSpacing: "0.4px",
      fontSize: 20,
      color: "blue",
    },
    "& .ReactVirtualized__Table__rowColumn": {
      marginRight: 0,
      paddingLeft: 24,
    },
    "& .ReactVirtualized__Table__rowColumn:first-of-type": {
      color: "secondary",
      marginLeft: 0,
      paddingLeft: 24,
    },
    "& .ReactVirtualized__Table__row:nth-of-type(odd)": {
      backgroundColor: "cadetBlue",
    },
    "& .ReactVirtualized__Table__row:nth-of-type(even)": {
      backgroundColor: "aquaMarine",
    },
  },
}));

export default useStyles;
