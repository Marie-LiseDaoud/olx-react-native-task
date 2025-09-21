import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "../../../components/common/Text";
import { useAuth } from "../../../hooks/useAuth";
import colors from "../../../config/colors";
import Button from "../../../components/common/Button";

const Profile = () => {
  const { logout } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
      }}
    >
      <Button
        onPress={() => logout()}
        style={{ backgroundColor: colors.orange.dark.default }}
      >
        <Text color={colors.white.normal.default}>LOGOUT</Text>
      </Button>
    </View>
  );
};

export default Profile;
