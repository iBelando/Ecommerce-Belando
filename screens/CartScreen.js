import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CartItem from "../components/CartItem";
import { colors } from "../styles/Colors";
import { useDispatch, useSelector } from "react-redux";
import { confirmPurchase } from "../features/Cart";

const handleDeleteItem = (id) => {
  console.log(`Se elimina del carrito el producto con el id: ${id}`);
};

const renderItem = (data) => {
  return <CartItem item={data.item} onDelete={handleDeleteItem} />;
};

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart.value);
  console.log(cart);

  const handleConfirm = () => {
    dispatch(confirmPurchase(cart));
  };

  const total = "$12.000";

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
          <Text style={styles.text}>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: colors.primario,
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: colors.secundario,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontFamily: "NunitoBlack",
    padding: 8,
  },
});
