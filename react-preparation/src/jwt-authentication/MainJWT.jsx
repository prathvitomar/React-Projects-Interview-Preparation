import React from "react";
import Register from "./Register";

function MainJWT() {
  return (
    <>
      <AuthProvider>
        <Register />
      </AuthProvider>
    </>
  );
}

export default MainJWT;
