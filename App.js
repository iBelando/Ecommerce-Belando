import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import MainNavigator from "./navigation";
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  const [loaded] = useFonts({
    DancingScriptBold: require("./assets/Fonts/DancingScript/static/DancingScript-Bold.ttf"),
    FjallaOneRegular: require("./assets/Fonts/Fjalla_One/FjallaOne-Regular.ttf"),
    NunitoRegular: require("./assets/Fonts/Nunito/static/Nunito-Regular.ttf"),
    NunitoBlack: require("./assets/Fonts/Nunito/static/Nunito-Black.ttf"),
    NunitoBlackItalic: require("./assets/Fonts/Nunito/static/Nunito-LightItalic.ttf"),
    RubikGlitch: require("./assets/Fonts/Rubik_Glitch/RubikGlitch-Regular.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
