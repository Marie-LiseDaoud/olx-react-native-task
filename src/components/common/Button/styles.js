import { StyleSheet } from "react-native";
import colors from "../../../config/colors";

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    boxShadow:
      "inset 0px 0px 50px rgba(255, 255, 255, 0.05), inset 0px 3.6px 3.6px rgba(255, 255, 255, 0.25)",
  },
  text: {
    textAlign: "center",
  },
});

export default styles;
