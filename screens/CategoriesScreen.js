import {
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

const CategoriesScreen = ({ handleCategory }) => {
  const [input, setInput] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES);

  useEffect(() => {
    if (input === "") setCategoriesFilter(CATEGORIES);
    else {
      // console.log("Se ejecuta el efecto");
      //utilize CATEGORIES en lugar de categoriesFilter, para que filtre al modificar cada letra
      categoriasFiltradas = CATEGORIES.filter((category) =>
        category.category.toLowerCase().includes(input.toLowerCase())
      );
      setCategoriesFilter(categoriasFiltradas);
    }
  }, [input]);

  const handleErase = () => {
    setInput("");
  };

  const handleSelectedCategory = (category) => {
    // console.log(category);
    handleCategory(category);
  };

  return (
    <>
      <Header />
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
            <MaterialIcons name="delete-forever" size={36} color="black" />
          </TouchableOpacity>
        </Searcher>
        <View style={styles.listContainer}>
          {categoriesFilter.length !== 0 ? (
            <ListIndex
              data={categoriesFilter}
              onPress={handleSelectedCategory}
            />
          ) : (
            <Text>
              "El criterio de busqueda no coincide con ninguna categoria"
            </Text>
          )}

          {/* {console.log("----categorias en el filtro => " + categoriesFilter.length)} */}
        </View>
      </View>
    </>
  );
};

export default CategoriesScreen;

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
    flex: 1,
  },
});
