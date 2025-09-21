import { Dimensions, StyleSheet } from "react-native";
const { width: screenWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    // marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  info: {
    padding: 12,
    gap: 5,
  },
});

export default styles;
