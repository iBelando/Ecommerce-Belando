import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import OrderItem from "../components/OrderItem";
import Orders from "../data/Orders";

const renderItem = ({ item }) => <OrderItem item={item} />;

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
