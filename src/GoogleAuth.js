import React from "react";

function GoogleAuth() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:9090/api/auth/google";
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
}

export default GoogleAuth;
