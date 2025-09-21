import { StyleSheet } from "react-native";
import colors from "../../../config/colors";
import { Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: colors.grey.dark.default,
  },
  carouselImage: {
    width: screenWidth,
    height: screenWidth * 0.6,
    resizeMode: "cover",
  },
  rowDot: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  dot: {
    width: 8,
    height: 8,
    margin: 3,
    borderRadius: 4,
  },
  box: {
    margin: 16,
    backgroundColor: colors.grey.light.default,
    borderRadius: 16,
    padding: 18,
    shadowColor: colors.black.normal.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  wrap: {
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
  },
  detailView: {
    backgroundColor: colors.white.normal.default,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
    minWidth: 120,
  },
  btnText: {
    color: colors.orange.dark.default,
    fontWeight: "bold",
    fontSize: 16,
  },
  btn: {
    backgroundColor: colors.orange.light.default,
    marginBottom: 20,
  },
});
export default styles;
