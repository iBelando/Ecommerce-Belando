import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { API_KEY } from "../constants/googleAPI";

const SetLocationScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const initialRegion = {
    latitude: 37,
    longitude: -122,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const handleLocation = (evento) => {
    setLocation({
      lat: evento.nativeEvent.coordinate.latitude,
      lng: evento.nativeEvent.coordinate.longitude,
    });
  };

  const handleConfirm = () => {
    //REVERSE GEOCODE
    (async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`
      );
      const reverseGeocode = await response.json();
      const address = reverseGeocode.results[0].formatted_address;
      navigation.navigate("Save-location", { address });
    })();
  };

  return (
    <>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <>
          <MapView
            onPress={handleLocation}
            initialRegion={initialRegion}
            style={{ flex: 1 }}
          >
            {location?.lat ? (
              <Marker
                title="Ubicacion seleccionada"
                coordinate={{
                  latitude: location.lat,
                  longitude: location.lng,
                }}
              />
            ) : null}
          </MapView>

          <Button title="Confirmar ubicacion" onPress={handleConfirm}></Button>
          <View style={{ marginBottom: 80 }} />
        </>
      )}
    </>
  );
};

export default SetLocationScreen;

const styles = StyleSheet.create({});
