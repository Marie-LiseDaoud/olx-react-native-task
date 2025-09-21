import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 64,
  },
  tabBarButton: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 6,
  },
  tabBarIndicator: {
    width: 6,
    height: 6,
    backgroundColor: colors.transparent,
    borderRadius: 10,
  },
  tabBarActiveIndicator: {
    width: 6,
    height: 6,
    backgroundColor: colors.green.normal.default,
    borderRadius: 10,
  },
  tabBarIcon: {
    width: 28,
    height: 28,
  },
});

export default styles;
