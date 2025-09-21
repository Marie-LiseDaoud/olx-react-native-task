import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "../../../components/common/Text";
import { useAuth } from "../../../hooks/useAuth";

const Profile = () => {
  const { logout } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <TouchableOpacity onPress={() => logout()}>
        <Text color="black">LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
