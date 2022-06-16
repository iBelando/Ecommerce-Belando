import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import OrderItem from "../components/OrderItem";
import Orders from "../data/Orders";
import { useDispatch } from "react-redux";
import { getOrders } from "../features/orders";

const renderItem = ({ item }) => <OrderItem item={item} />;

const OrderScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders);
  }, []);

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
