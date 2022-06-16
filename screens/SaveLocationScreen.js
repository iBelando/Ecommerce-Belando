import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import renamePathAndMove from "../utils/renamePath";
import { colors } from "../styles/Colors";
import { useDispatch } from "react-redux";
import { addLocation } from "../features/Locations";

const SaveLocationScreen = ({ navigation, route }) => {
  const [title, setTitle] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const params = route.params;

  const dispatch = useDispatch();

  const handlePickLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPicture(result.uri);
    }
  };

  const getPermission = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();

    if (status !== "granted") {
      return false;
    }
    return true;
  };

  const handleTakePicture = async () => {
    const isVerified = getPermission();
    if (!isVerified) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    setPicture(image.uri);
  };

  const handleConfirm = async () => {
    dispatch(
      addLocation({ title, picture, id: Date.now(), address: params?.address })
    );
    setTitle("");
    setPicture("");
  };

  const handleLocation = () => {
    navigation.navigate("Get-location");
  };

  const handleSetLocation = () => {
    navigation.navigate("Set-location");
  };

  return (
    <View style={styles.container}>
      <Text>Nueva dirección</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Título"
        style={styles.input}
      />
      {picture ? (
        <Image source={{ uri: picture }} style={styles.image} />
      ) : null}
      <Button title="Tomar una foto" onPress={handleTakePicture} />
      <Button title="Seleccionar de la galería" onPress={handlePickLibrary} />
      <Button title="Obtener una ubicación" onPress={handleLocation} />
      <Button title="Definir una ubicación" onPress={handleSetLocation} />
      <Button title="Confirmar" onPress={handleConfirm}></Button>
    </View>
  );
};

export default SaveLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.terciario,
  },
  image: {
    width: "90%",
    height: 200,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.primario,
  },
  input: {
    fontSize: 24,
    height: 40,
  },
});
