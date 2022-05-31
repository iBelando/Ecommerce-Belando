import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../../../screens/OrderScreen";
import { colors } from "../../../styles/Colors";

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primario,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "NunitoBlack",
          fontSize: 28,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Cart"
        component={OrderScreen}
        options={{
          title: "Ordenes",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default OrdersStack;

const styles = StyleSheet.create({});
