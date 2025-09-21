import { Text, View } from "react-native";

export default function MessageScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>No New Messages!</Text>
    </View>
  );
}
