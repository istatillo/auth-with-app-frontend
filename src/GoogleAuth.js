import React from "react";

function GoogleAuth() {
  const handleGoogleLogin = () => {
    window.location.href =
      "https://api.isabek.uz/api/auth/google?redirect_uri_frontend=http://localhost:3000";
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
}

export default GoogleAuth;
