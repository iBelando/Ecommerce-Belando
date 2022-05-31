import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "../../../screens/CategoriesScreen";
import ProductsScreen from "../../../screens/ProductsScreen";
import DetailScreen from "../../../screens/DetailScreen";
import { colors } from "../../../styles/Colors";

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: colors.primario },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "NunitoBlack",
          fontSize: 28,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Categorias",
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.productTitle,
          headerTintColor: "black",
          headerStyle: { backgroundColor: colors.secundario },
        })}
      />
    </Stack.Navigator>
  );
}

export default ShopNavigator;

const styles = StyleSheet.create({});
