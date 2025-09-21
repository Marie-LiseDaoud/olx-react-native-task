import { Stack } from "expo-router";
import TabHeader from "../../../components/common/TabHeader";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: (props) => <TabHeader {...props} />,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="product/product-details"
        options={{ header: (props) => <TabHeader {...props} removeBack={false} /> }}
      />
    </Stack>
  );
};

export default HomeLayout;
