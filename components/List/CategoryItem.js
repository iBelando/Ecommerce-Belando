import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../styles/Colors";

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category.category}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 170,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    backgroundColor: colors.terciario,
    margin: 15,
    borderRadius: 10,

    //Sombras
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  text: {
    fontSize: 17,
    fontFamily: "RubikGlitch",
  },
});
