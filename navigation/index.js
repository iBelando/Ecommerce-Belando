import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigatorLogged from "./tabs/UserLogged";
import AuthStack from "./stacks/Auth";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  const { user } = useSelector((state) => state.auth.value);

  return (
    <NavigationContainer>
      {true ? <TabNavigatorLogged /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
