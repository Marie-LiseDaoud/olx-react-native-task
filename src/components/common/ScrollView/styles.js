import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../config/colors";
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey.dark.default,
  },
  scrollContent: {
    paddingVertical: 20,
  },
});

export default styles;
