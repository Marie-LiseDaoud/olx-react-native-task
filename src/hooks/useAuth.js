import _ from "lodash";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../redux/reducers/authReducer";
import { router } from "expo-router";

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useMemo(() => !_.isEmpty(user), [user]);

  const logout = () => {
    dispatch(authSlice.actions.logout());
    router.replace("/login");
  };

  return { user, isAuthenticated, logout };
};
