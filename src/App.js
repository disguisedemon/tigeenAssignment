import React, { useEffect, useState } from "react";
import "./App.css";
import jwt_decode from "jwt-decode";
// import Home from "./components/home";
import Home from "./components/hoodieStore";

// import NavigationDrawer from "../src/AppWithAuth/navigationDrawer";

const App = () => {
  const [user, setUser] = useState({});

  const handleCallbackResponse = (Response) => {
    const userObject = jwt_decode(Response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "164707445993-klll9fp1th22f3c56c137a8du183ob2h.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  const handleSignOut = (e) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    console.log("logged out");
  };
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        id="signInDiv"
      ></div>
      {/* {Object.keys(user).length !== 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )} */}
      {Object.keys(user).length > 0 && <Home handleSignOut={handleSignOut} />}
    </div>
    // <>
    //   <Home />
    // </>
  );
};

export default App;

// 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 - clientId
// 164707445993-klll9fp1th22f3c56c137a8du183ob2h.apps.googleusercontent.com - clientSecret
