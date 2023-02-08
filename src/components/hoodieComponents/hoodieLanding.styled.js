import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    display: "inline-block",
    cursor: "pointer",
    padding: 4,
    transition: "transform 0.3s ease-in-out",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  imgContainer: {
    width: "100%",
    height: "100%",
    overFlowX: "scroll",
    whiteSpace: "nowrap",
    scrollBehavior: "smooth",
  },
}));

export default useStyles;
