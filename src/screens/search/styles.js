import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: colors.grey.dark.default,
  },
  filter: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  price: {
    marginBottom: 16,
    gap: 10,
  },
  productView: {
    marginTop: 24,
    alignItems: "center",
    gap: 20,
  },
});

export default styles;
