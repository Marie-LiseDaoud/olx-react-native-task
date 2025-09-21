import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import FormikField from "../../../components/common/FormikField";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import Icon from "../../../components/common/Icon";
import colors from "../../../config/colors";
import Text from "../../../components/common/Text";
import Button from "../../../components/common/Button";
import { useDispatch } from "react-redux";
import { authSlice } from "../../../redux/reducers/authReducer";
import useLanguage from "../../../hooks/useLanguage";
import { setLanguage } from "../../../redux/actions/preferencesActions";
import LanguageSwitcher from "../../../components/common/LanguageSwitcher";

const LoginScreen = () => {
  const { top } = useSafeAreaInsets();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { flexDirection, t } = useLanguage();

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[
        styles.container,
        {
          paddingTop: top + 20,
        },
      ]}
    >
      <View
        style={[
          styles.row,
          {
            flexDirection,
          },
        ]}
      >
        <TouchableOpacity onPress={() => router.replace("/home")}>
          <Text
            color={colors.white.normal.default}
            fontSize={16}
            weight="bold"
            style={{ textDecorationLine: "underline" }}
          >
            {t("auth", "skip")}
          </Text>
        </TouchableOpacity>
        <LanguageSwitcher />
      </View>

      <Text fontSize={24} color={colors.white.normal.default} weight="bold">
        {t("auth", "loginToAccount")}
      </Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          const user = {
            id: 1,
            username: values.username,
            password: values.password,
          };
          dispatch(authSlice.actions.setUser(user));
          router.replace("/home");
        }}
        validateOnMount={true}
      >
        {({ handleSubmit, isValid }) => (
          <View style={{ gap: 20 }}>
            <FormikField
              name="username"
              placeholder={t("auth", "enterUsername")}
              autoCapitalize="none"
              label={t("auth", "username")}
            />
            <FormikField
              name="password"
              placeholder={t("auth", "enterPassword")}
              label={t("auth", "password")}
              secureTextEntry={!showPassword}
              rightEltOnPress={() => setShowPassword((v) => !v)}
              rightElt={
                <Icon
                  lib="MC"
                  size={20}
                  name={showPassword ? "eye" : "eye-off"}
                  color={colors.white.normal.default}
                />
              }
              autoCapitalize="none"
            />
            <Button
              onPress={handleSubmit}
              disabled={!isValid}
            >
              {t("auth", "login")}
            </Button>
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
