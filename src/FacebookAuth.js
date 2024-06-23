import React from "react";

const FacebookAuth = () => {
  const handleFacebookLogin = () => {
    window.location.href =
      "http://localhost:9090/api/auth/facebook?redirect_uri_frontend=http://localhost:3000";
  };

  return <button onClick={handleFacebookLogin}>Login with Facebook</button>;
};

export default FacebookAuth;
