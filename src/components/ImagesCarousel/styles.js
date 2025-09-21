import { Dimensions, StyleSheet } from "react-native";
import colors from "../../config/colors";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  carousel: {
    height: screenHeight / 5,
  },
  image: {
    width: screenWidth,
    height: screenHeight / 5,
    resizeMode: "contain",
  },
});

export default styles;
