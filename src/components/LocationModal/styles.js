import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.white.normal.default,
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.black.normal.default,
  },
  closeBtn: { padding: 8 },
  locationItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey.light.default,
  },
  locationText: { fontSize: 16, color: colors.black.normal.default },
  empty: {
    textAlign: "center",
    color: colors.grey.dark.default,
    marginTop: 32,
  },
});

export default styles;
