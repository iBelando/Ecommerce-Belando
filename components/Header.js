import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/Colors";

const Header = ({ title = "Ecommerce" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primario,
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "NunitoBlack",
  },
});
