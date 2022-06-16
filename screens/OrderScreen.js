import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useSelector } from "react";
import OrderItem from "../components/OrderItem";
import Orders from "../data/Orders";
import { useDispatch } from "react-redux";
import { getOrders } from "../features/orders";

const renderItem = ({ item }) => <OrderItem item={item} />;

const OrderScreen = () => {
  const { orders } = useSelector((state) => state.orders.value);
  const { user } = useSelector((state) => state.auth.value);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders(user.email));
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
