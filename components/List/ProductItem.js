import {
  useWindowDimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const ProductItem = ({ product }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <Image
        source={{ uri: product.image }}
        style={{
          ...styles.image,
          width: width * 0.8,
          height: width * 0.8,
          marginHorizontal: width * 0.08,
        }}
      />
      <Text style={styles.text}>{product.description}</Text>
    </View>
  );
};

export default ProductItem;

const styles = {
  image: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  text: {
    alignItems: "center",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 35,
    fontFamily: "NunitoBlackItalic",
  },
};
