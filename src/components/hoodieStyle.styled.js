import { makeStyles } from "@material-ui/core/styles";

const useHoodieStyles = makeStyles((theme) => ({
  span: {
    color: "white",
    marginLeft: 5,
    fontSize: "initial",
  },
  navBarContainer: {
    display: "flex",
    background: "black",
    height: 70,
    position: "sticky",
    width: "100%",
  },
  logo: {
    marginLeft: 15,
    marginTop: 30,
    width: "150px",
    borderRadius: 3,
  },
  nav: {
    position: "absolute",
    right: 12,
    top: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default useHoodieStyles;
