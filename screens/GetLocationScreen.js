import { Image, StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { API_KEY } from "../Constants/googleAPI";

const GetLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [photo, setPhoto] = useState(null);

  //Efecto para traer la ubicación apenas renderiza
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});

      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    })();
  }, []);

  //Efecto para traer el mapa y luego hacer un reverse geoCode a partir de las coordenadas
  useEffect(() => {
    if (location?.lat) {
      (async () => {
        setPhoto(
          `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=15&size=600x600&maptype=roadmap&markers=color:blue%7Clabel:I%7C${location.lat},${location.lng}&key=${API_KEY}`
        );
        //REVERSE GEOCODE
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`
        );
        const reverseGeocode = await response.json();
        console.log(reverseGeocode);
        const address = reverseGeocode.results[0].formatted_address;
        setAddress(address);
      })();
    }
  }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const handleConfirmLocation = () => {
    navigation.navigate("Save-location", { address });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <View>
        {photo ? (
          <Image source={{ uri: photo }} style={{ width: 500, height: 500 }} />
        ) : null}
        {address ? (
          <>
            <Text>{address}</Text>
            <Button
              title="Confirmar dirección"
              onPress={handleConfirmLocation}
            ></Button>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default GetLocationScreen;

const styles = StyleSheet.create({});
