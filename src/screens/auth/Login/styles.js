import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.grey.dark.default,
    gap: 40,
  },
  globe: {
    alignItems: "center",
    backgroundColor: colors.white.normal.default,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 10,
  },
  row: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
