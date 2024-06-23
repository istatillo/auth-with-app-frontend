import React from "react";

const FacebookAuth = () => {
  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:9090/api/auth/facebook";
  };

  return <button onClick={handleFacebookLogin}>Login with Facebook</button>;
};

export default FacebookAuth;
