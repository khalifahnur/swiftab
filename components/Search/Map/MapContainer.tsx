import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Mapbox, { Camera, UserLocation, MapView, ShapeSource, SymbolLayer, Image, Images } from '@rnmapbox/maps';
import * as Location from 'expo-location'; 
import Restaurants from '@/components/Restaurants.json';
import pin from '@/assets/pin.png';
import { point, featureCollection } from '@turf/helpers';

export default function MapContainer() {
    const mapbox_key = process.env.EXPO_PUBLIC_MAPBOX_KEY;
    const [locationPermission, setLocationPermission] = useState(null);

    Mapbox.setAccessToken(mapbox_key || '');

    useEffect(() => {
        // Request location permission
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access location was denied');
                return;
            }
            setLocationPermission(true);
        })();
    }, []);

    if (!locationPermission) {
        return <Text>Requesting location permission...</Text>;
    }

    const points = Restaurants.map((res) => point([res.long, res.lat]));
    const AvailableRes = featureCollection(points);

    return (
        <MapView style={styles.map}>
            <Camera followUserLocation={true} followZoomLevel={14} />
            <UserLocation
                visible={true}
                showsUserHeadingIndicator={true}
            />
            <ShapeSource id='restaurants' shape={AvailableRes} >
                <SymbolLayer
                    id='restaurants-icons'
                    style={{
                        iconImage: 'pin',
                        iconAllowOverlap: true,
                        iconSize: 0.08,
                        iconAnchor: 'bottom'
                    }}
                />
                <Images images={{pin}} />
            </ShapeSource>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});
