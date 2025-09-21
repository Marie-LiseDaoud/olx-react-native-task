import { Redirect } from "expo-router";
import { useAuth } from "../../hooks/useAuth";


const Welcome = () => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Redirect href="/home" />;
  } else {
    return <Redirect href="/login" />;
  }
};

export default Welcome;
