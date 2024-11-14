import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Mapbox, {
  Camera,
  UserLocation,
  MapView,
  ShapeSource,
  SymbolLayer,
  Images,
  CircleLayer,
} from "@rnmapbox/maps";
import * as Location from "expo-location";
import { color } from "@/constants/Colors";
import RestaurantsList from "./RestaurantsList";
import opencage from "opencage-api-client";
import restaurants from "@/components/Data";
import SearchComponent from "./SearchComponent";

export default function MapContainer() {
  const pin = require("../../../assets/images/pin.png");
  const mapbox_key = process.env.EXPO_PUBLIC_MAPBOX_KEY;
  const [locationPermission, setLocationPermission] = useState<boolean | null>(
    null
  );
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState('Location Loading.....');
  const ref = useRef(null);
  const window = useWindowDimensions();
  const CARD_WIDTH = window.width * 0.8;

  // const coords = restaurants.map((item)=>item.data.map((item)=>item.location))
  // const flattenedLocations = coords.flat();

  // const reverseGeocodeMultiple = async (locations) => {
  //   const key = process.env.EXPO_PUBLIC_OPENCAGE_API;
  //   try {
  //     const promises = locations.map(async (place) => {
  //       const { results } = await opencage.geocode({ key, q: place });
  //       return results[0]?.geometry; // Extract only the geometry part
  //     });
  
  //     const resolvedResults = await Promise.all(promises);
  //     console.log(resolvedResults); // Optional: Log geometry data
  //     setA(resolvedResults); // Store geometry results in state
  //   } catch (error) {
  //     console.log("error", error.message);
  //   }
  // };

  Mapbox.setAccessToken(mapbox_key || "");

  useEffect(() => {
    // Request location permission
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      //get current position lat and long
      const {coords} = await Location.getCurrentPositionAsync();  
      //console.log(coords)
      
      if(coords){
       const {latitude,longitude} =coords;
       //console.log(latitude,longitude);

      //provide lat and long to get the the actual address
       let responce = await Location.reverseGeocodeAsync({           
         latitude,
         longitude
       });
       //console.log(responce);
       //loop on the responce to get the actual result
       for(let item of responce ){
        let address = `${item.name} ${item.city} ${item.postalCode}`
         setDisplayCurrentAddress(address)
       }
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }
      setLocationPermission(true);
    }})();
  }, []);

  if (!locationPermission) {
    return <Text>Requesting location permission...</Text>;
  }

  

  const AvailableRes = {
    type: "FeatureCollection",
    features: restaurants.flatMap((item)=>item.data.flatMap((item)=>({
      type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [item.long, item.lat],
    },
    properties: {
      id: item.id,
      name: item.restaurantName,
      description: item.location,
    },
    })
      
  ))
  };

  const HandlePress = (id) => {
    // Find the exact index across nested data
    let index = -1;
    for (let i = 0; i < restaurants.length; i++) {
      const itemIndex = restaurants[i].data.findIndex(
        (restaurant) => restaurant.id === id
      );
      if (itemIndex !== -1) {
        index = itemIndex + i * restaurants[i].data.length;
        break;
      }
    }
  
    if (ref.current && index !== -1) {
      ref.current.scrollToOffset({
        // 240 is the width value + padding for card
        offset: index * (240),
        animated: true,
      });
    }
  };
  

  return (
    <>
      <View style={styles.search}>
        <SearchComponent placeholderTxt={displayCurrentAddress}/>
      </View>
      <MapView style={styles.map}>
        <Camera followUserLocation={true} followZoomLevel={16} />
        <UserLocation visible={true} showsUserHeadingIndicator={true} />
        <ShapeSource
          id="restaurants"
          cluster
          shape={AvailableRes}
          onPress={(e) => HandlePress(e.features[0].properties.id)}
        >
          <CircleLayer id="cluster" style={{ circleColor: color.green }} />
          <SymbolLayer
            id="restaurants-icons"
            style={{
              iconImage: "pin",
              iconAllowOverlap: true,
              iconSize: 0.08,
              iconAnchor: "bottom",
            }}
          />
          <Images images={{ pin }} />
        </ShapeSource>
      </MapView>
      <View style={styles.res}>
        <RestaurantsList data={restaurants} scrollViewRef={ref} />
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    position: "relative",
  },
  res:{
    flex:.3,
    paddingVertical:2
  },
  search:{
    paddingHorizontal:10,
    paddingVertical:10
  }
});
