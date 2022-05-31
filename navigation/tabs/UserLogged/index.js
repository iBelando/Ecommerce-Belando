import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../styles/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ShopNavigator from "../../stacks/Shop";

import CartStack from "../../stacks/Cart";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import OrdersStack from "../../stacks/Orders";

const BottomTabs = createBottomTabNavigator();

const TabNavigatorLogged = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Fontisto name="shopping-store" size={20} color="black" />
                <Text>Shop</Text>
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Entypo name="shopping-cart" size={20} color="black" />
                <Text>Cart</Text>
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <MaterialCommunityIcons
                  name="order-bool-descending-variant"
                  size={24}
                  color="black"
                />
                <Text>Ordenes</Text>
              </View>
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigatorLogged;

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: colors.shadowTab,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    bottom: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    height: 55,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
