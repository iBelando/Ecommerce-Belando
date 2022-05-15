import { StyleSheet, View } from "react-native";
import { useState } from "react";
import CategoriesScreen from "./screens/CategoriesScreen";
import ProductsScreen from "./screens/ProductsScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [categorySelected, setCategorySelected] = useState(null);
  const handleCategory = (category) => {
    setCategorySelected(category);
  };
  const [loaded] = useFonts({
    DancingScriptBold: require("./assets/Fonts/DancingScript/static/DancingScript-Bold.ttf"),
    FjallaOneRegular: require("./assets/Fonts/Fjalla_One/FjallaOne-Regular.ttf"),
    NunitoRegular: require("./assets/Fonts/Nunito/static/Nunito-Regular.ttf"),
    NunitoBlack: require("./assets/Fonts/Nunito/static/Nunito-Black.ttf"),
    NunitoBlackItalic: require("./assets/Fonts/Nunito/static/Nunito-LightItalic.ttf"),
    RubikGlitch: require("./assets/Fonts/Rubik_Glitch/RubikGlitch-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {categorySelected ? (
        <ProductsScreen
          category={categorySelected}
          handleCategory={handleCategory}
        />
      ) : (
        <CategoriesScreen handleCategory={handleCategory} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //    justifyContent: 'center',
  },
});
