import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

const createStyles = (isFocused, isFilled, error) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      borderColor: colors.white.normal.default,
      borderWidth:1,
      height: 48,
      paddingHorizontal: 20,
      borderRadius: 5,
      gap: 8,
    },
    label: {
      color: colors.white.normal.default,
      marginBottom: 12,
    },
    textInput: {
      height: "100%",
      flexGrow: 1,
      fontSize: 14,
    },
    wrapper: {},
    eltWrapper: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    err: {
      color: colors.red.normal.default,
      marginTop: 8,
    },
  });

export default createStyles;
