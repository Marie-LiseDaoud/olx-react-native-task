import Reactotron, {
  asyncStorage,
  networking,
  openInEditor,
  trackGlobalErrors,
  trackGlobalLogs,
} from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: "olx-marielise-daoud",
  })
  .useReactNative({
    overlay: true,
  })
  .use(trackGlobalErrors())
  .use(trackGlobalLogs())
  .use(asyncStorage())
  .use(networking())
  .use(openInEditor())
  .use(reactotronRedux())
  .connect();

export default reactotron;
