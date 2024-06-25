import React from "react";

const KakaoAuth = () => {
  const handleKakaoLogin = () => {
    window.location.href =
      "https://api.isabek.uz/api/auth/kakao?redirect_uri_frontend=http://localhost:3000";
  };

  return <button onClick={handleKakaoLogin}>Login with Kakao</button>;
};

export default KakaoAuth;
