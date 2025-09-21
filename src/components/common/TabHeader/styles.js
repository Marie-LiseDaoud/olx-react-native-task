import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.grey.dark.default,
  },

  right: {
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    gap: 10,
  },

  leftBackWrapper: { flexDirection: "row", flexGrow: 1 },
});

export default styles;
