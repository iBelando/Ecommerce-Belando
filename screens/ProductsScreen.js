import {
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Searcher from "../components/Searcher";
import { MaterialIcons } from "@expo/vector-icons";
import ListIndex from "../components/List/ListIndex";
import { PRODUCTS } from "../data/Products";
import { colors } from "../styles/Colors";

const ProductsScreen = ({
  category = { id: 1, category: "Ropa" },
  handleCategory,
}) => {
  const [input, setInput] = useState("");
  const [initialProducts, setInitialProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);

  const handleErase = () => {
    setInput("");
  };

  //este UseEffect busca productos según el input
  useEffect(() => {
    if (initialProducts.length !== 0) {
      if (input === "") {
        setProductsFiltered(initialProducts);
      } else {
        const productosFiltrados = initialProducts.filter((product) =>
          product.description.toLowerCase().includes(input.toLowerCase())
        );
        setProductsFiltered(productosFiltrados);
      }
    } else {
    }
  }, [input, initialProducts]);

  //este UseEffect hace el filtro inicial de productos por categoria
  useEffect(() => {
    const productosIniciales = PRODUCTS.filter(
      (product) => product.category === category.id
    );
    setInitialProducts(productosIniciales);
  }, []);

  // console.log(initialProducts);
  // console.log(productsFiltered);

  return (
    <>
      <Header title={category.category} />
      <View style={styles.container}>
        <Searcher
          additionalStyles={{
            backgroundColor: colors.secundario,
          }}
        >
          <TextInput
            value={input}
            onChangeText={setInput}
            keyboardType="default"
            style={styles.input}
            placeholder="Ingrese producto a buscar"
          />

          <TouchableOpacity onPress={handleErase}>
            <MaterialIcons name="delete-forever" size={36} color="black" />
          </TouchableOpacity>
        </Searcher>
        <Button title="<- Go back" onPress={() => handleCategory(null)} />

        <View style={styles.listContainer}>
          {productsFiltered.length !== 0 ? (
            <ListIndex
              data={productsFiltered}
              itemType={"Producto"}
              onPress={() => {}}
            />
          ) : (
            <Text>
              "El criterio de busqueda no coincide con ningun producto
              disponible"
            </Text>
          )}
          {/*----------------------------------------------------- onPress (funcion vacia) */}
          {/* {console.log("----productos en el filtro => " + productsFiltered.length)} */}
          {/*aplicar if o similar para determinar si productsFiltered.length es 0, ejecute un texto*/}
        </View>
      </View>
    </>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    // justifyContent: 'center',
    width: "100%",
  },
  input: {
    flexDirection: "column",
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: colors.terciario,
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
  },
  listContainer: {
    marginTop: 20,
    height: "70%",
  },
});
