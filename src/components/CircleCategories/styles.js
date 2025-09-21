import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export const styles = StyleSheet.create({
  scroll: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  circleContainer: {
    alignItems: "center",
    marginHorizontal: 12,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor:colors.yellow.normal.default,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
