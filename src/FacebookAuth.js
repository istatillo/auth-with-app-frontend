import React from "react";

const FacebookAuth = () => {
  const handleFacebookLogin = () => {
    window.location.href =
      "https://api.isabek.uz/api/auth/facebook?redirect_uri_frontend=http://localhost:3000";
  };

  return <button onClick={handleFacebookLogin}>Login with Facebook</button>;
};

export default FacebookAuth;
