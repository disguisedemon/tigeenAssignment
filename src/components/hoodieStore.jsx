import React, { useEffect, useState } from "react";
import SideNavigationDrawer from "../AppWithAuth/navigationDrawer";
import { Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import logo from "./logo.jpg";
import HoodieLanding from "./hoodieComponents/hoodieLanding";
// import ContactLanding from "./hoodieComponents/contactLanding";
import App from "./hoodieComponents/contactLanding";
import useHoodieStyles from "./hoodieStyle.styled";
import { Route, Link, Switch } from "react-router-dom";

const NavOptions = () => {
  const LinkJson = [
    { linkName: "Home", to: "/home" },
    { linkName: "Cart", to: "/cart" },
    { linkName: "About", to: "/about" },
    { linkName: "Contact", to: "/contact" },
  ];
  // console.log(history);
  const iconProvider = (val) => {
    switch (val.linkName) {
      case "Cart":
        return <ShoppingCartOutlinedIcon style={{ color: "white" }} />;
      case "About":
        return <SupportAgentOutlinedIcon style={{ color: "white" }} />;
      case "Contact":
        return <ImportContactsOutlinedIcon style={{ color: "white" }} />;
      default:
        return <HomeWorkOutlinedIcon style={{ color: "white" }} />;
    }
  };

  const classes = useHoodieStyles();
  return (
    <nav className={classes.nav}>
      {LinkJson.map((val) => {
        return (
          <Link
            to={val.to}
            style={{
              marginLeft: 15,
              display: "flex",
              color: "#white",
              textDecoration: "none",
            }}
          >
            {iconProvider(val)}
            <span
              style={{ color: "white", marginLeft: 5, fontSize: "initial" }}
            >
              {val.linkName}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

const Navbar = (props) => {
  const { handleSignOut } = props;
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let animationFrame;
    const fade = () => {
      setOpacity((opacity) => (opacity >= 1 ? 0 : opacity + 0.01));
      animationFrame = requestAnimationFrame(fade);
    };
    fade();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const classes = useHoodieStyles();

  return (
    <>
      <div className={classes.navBarContainer}>
        <IconButton
          aria-label="Open drawer"
          color="white"
          onClick={() => toggleNavDrawer()}
        >
          <MenuIcon style={{ color: "white" }} />
          <span className={classes.span} style={{ opacity }}>
            Click Me!
          </span>
        </IconButton>
        <SideNavigationDrawer
          navDrawerOpen={navDrawerOpen}
          setNavDrawerOpen={setNavDrawerOpen}
          toggleNavDrawer={() => toggleNavDrawer()}
          setValue={() => {}}
        />
        <div>
          <img
            src={logo}
            alt="Logo"
            style={{
              marginLeft: 30,
              marginTop: 15,
              width: "150px",
              borderRadius: 3,
            }}
          />
        </div>
        <NavOptions />
        <Button onClick={handleSignOut()}>Sign Out</Button>
      </div>
      <div style={{ marginTop: 20 }}>
        <Switch>
          <Route path="/home">
            <HoodieLanding />
          </Route>
          <Route path="/contact">
            <App />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Navbar;
