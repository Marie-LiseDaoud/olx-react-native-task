import { Stack } from "expo-router";
import TabHeader from "../../../components/common/TabHeader";

const SearchLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: (props) => <TabHeader {...props} />,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default SearchLayout;
