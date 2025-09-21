import { Redirect } from "expo-router";
import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
// import { useAuth } from "../../hooks/useAuth";
// import { setupAxios } from "../../utils/network";

const Welcome = () => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Redirect href="/home" />;
  } else {
    return <Redirect href="/login" />;
  }
};

export default Welcome;
