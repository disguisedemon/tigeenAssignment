import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "#333", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "#333", textDecoration: "none" }}>
          Contact
        </Link>
      </nav>
    </Router>
  );
};

const Home = () => {
  return (
    <main style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "2em" }}>Welcome to my website!</h1>
      <p style={{ fontSize: "2em" }}>This is the home page.</p>
    </main>
  );
};

const About = () => {
  return (
    <main style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "2em", margin: "1em 0" }}>
        Welcome to my website!
      </h1>
      <p style={{ fontSize: "2em" }}>
        I am a web developer with a passion for creating beautiful websites.
      </p>
    </main>
  );
};

const Contact = () => {
  return (
    <main style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "2em", margin: "1em 0" }}>Contact me</h1>
      <p style={{ fontSize: "1.5em" }}>
        You can reach me at 9113624166/ sharathgangadkar100898@gmail.com.
      </p>
    </main>
  );
};

const App = () => {
  // const location = useLocation();
  return (
    <div style={{ fontFamily: "sans-serif", color: "#333" }}>
      <Navbar />
      {window.location.pathname === "/" && <About />}
      {window.location.pathname === "/about" && <About />}
      {window.location.pathname === "/contact" && <Contact />}
    </div>
  );
};

export default App;
