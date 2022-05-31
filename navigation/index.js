import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigatorLogged from "./tabs/UserLogged";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigatorLogged />
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
