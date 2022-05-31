import {
  Dimensions,
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../styles/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CategoryItem = ({ category }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        ...styles.container,
        maxWidth: width * 0.44,
        maxHeight: width * 0.44,
        margin: width * 0.03,
      }}
    >
      <Text style={styles.text}>{category.category}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = {
  container: {
    width: 3000,
    height: windowWidth * 0.44,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 8,
    backgroundColor: colors.terciario,
    borderRadius: 10,
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
};
