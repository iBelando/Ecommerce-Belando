import {
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Searcher from "../components/Searcher";
import { colors } from "../styles/Colors";
import { CATEGORIES } from "../data/Categories";
import ListIndex from "../components/List/ListIndex";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import Categories, { selectCategory } from "../features/categories";
import { setProductsByCategory } from "../features/products";

const CategoriesScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState();

  const { categories } = useSelector((state) => state.categories.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (input === "") setCategoriesFilter(categories);
    else {
      const categoriasFiltradas = categories.filter((category) =>
        category.category.toLowerCase().includes(input.toLowerCase())
      );
      setCategoriesFilter(categoriasFiltradas);
    }
  }, [input]);

  const handleErase = () => {
    setInput("");
  };

  const handleSelectedCategory = (category) => {
    dispatch(setProductsByCategory(category.id));
    dispatch(selectCategory(category.id));
    navigation.push("Products", {
      categoryId: category.id,
      categoryTitle: category.category,
    });
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
            <TextInput
              value={input}
              onChangeText={setInput}
              keyboardType="default"
              style={styles.input}
              placeholder="Ingrese categoria a buscar"
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
          <View style={styles.listContainer}>
            <ListIndex
              data={categoriesFilter}
              onPress={handleSelectedCategory}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default CategoriesScreen;

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  input: {
    flex: 1,
    width: "50%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: colors.terciario,
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
  },
  listContainer: {
    flex: 1,
  },
};
