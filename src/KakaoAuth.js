import React from "react";

const KakaoAuth = () => {
  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:9090/api/auth/kakao";
  };

  return <button onClick={handleKakaoLogin}>Login with Kakao</button>;
};

export default KakaoAuth;
