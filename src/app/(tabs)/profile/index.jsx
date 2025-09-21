import { Redirect } from "expo-router";
import { useAuth } from "../../../hooks/useAuth";
import Profile from "../../../screens/settings/Profile";

export default function ProfileScreen() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Profile />;
  }
  return <Redirect href="/login" />;
}
