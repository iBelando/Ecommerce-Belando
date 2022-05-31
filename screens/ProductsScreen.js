import {
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  useWindowDimensions,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import Searcher from "../components/Searcher";
import { MaterialIcons } from "@expo/vector-icons";
import ListIndex from "../components/List/ListIndex";
import { colors } from "../styles/Colors";
import { useDispatch, useSelector } from "react-redux";
import { setProductSelected } from "../features/products";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProductsScreen = ({
  category = { id: 1, category: "Ropa" },
  navigation,
  route,
}) => {
  const { width, height } = useWindowDimensions();
  const [input, setInput] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const { products } = useSelector((state) => state.products.value);
  const { categoryId } = route.params;
  const { productsByCategory } = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  const handleErase = () => {
    setInput("");
  };

  useEffect(() => {
    if (productsByCategory.length !== 0) {
      if (input === "") {
        setProductsFiltered(productsByCategory);
      } else {
        const productosFiltrados = productsByCategory.filter((product) =>
          product.description.toLowerCase().includes(input.toLowerCase())
        );
        setProductsFiltered(productosFiltrados);
      }
    } else {
    }
  }, [input, productsByCategory]);

  const handleDetailProduct = (product) => {
    dispatch(setProductSelected(product.id));
    navigation.navigate("Details", {
      categoryTitle: category.category,
    });
    console.log(product);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Searcher
            additionalStyles={{
              backgroundColor: colors.secundario,
            }}
          >
            <Button
              title={"<- Go \n back"}
              onPress={() => navigation.goBack()}
              style={{ margin: 10 }}
            />

            <TextInput
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              style={styles.input}
              placeholder="Ingrese producto a buscar"
            />

            <TouchableOpacity onPress={handleErase}>
              <MaterialIcons
                name="delete-forever"
                size={36}
                color="black"
                style={{ margin: 8 }}
              />
            </TouchableOpacity>
          </Searcher>

          <View
            style={{
              ...styles.listContainer,
              height: height < 534 ? "76%" : "83%",
            }}
          >
            {console.log(height)}
            {productsFiltered.length !== 0 ? (
              <ListIndex
                data={productsFiltered}
                itemType={"Producto"}
                onPress={handleDetailProduct}
              />
            ) : (
              <Text>
                "El criterio de busqueda no coincide con ningun producto
                disponible"
              </Text>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ProductsScreen;

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    flex: 1,
    width: "50%",
    padding: 10,
    marginVertical: 10,
    marginStart: 10,
    backgroundColor: colors.terciario,
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
  },
  listContainer: {
    marginTop: 8,
  },
};
