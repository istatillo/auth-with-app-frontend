import React, { useState, useEffect } from "react";
import KakaoAuth from "./KakaoAuth";
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userParam = urlParams.get("user");
    if (userParam) {
      const userData = JSON.parse(userParam);
      setUser(userData);
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  return (
    <div>
      <div className="App">
        <GoogleAuth />
        <KakaoAuth />
        <FacebookAuth />
      </div>

      <>{user ? <p>{JSON.stringify(user)}</p> : ""}</>
    </div>
  );
}

export default App;
