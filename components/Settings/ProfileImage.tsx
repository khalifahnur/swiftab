import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from "@/constants/Colors";
import * as ImagePicker from "expo-image-picker";

export default function ProfileImage() {
  const [statusMedia, requestPermissionMedia] =
    ImagePicker.useMediaLibraryPermissions();
  const [statusCamera, requestPermissionCamera] =
    ImagePicker.useCameraPermissions();
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    Alert.alert("Select Source", "Choose an option to select the image", [
      { text: "Camera", onPress: () => openCamera() },
      { text: "Gallery", onPress: () => openGallery() },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const openCamera = async () => {
    if (!statusCamera?.granted) {
      const permission = await requestPermissionCamera();
      if (!permission.granted) {
        console.log("Permission to access camera was denied");
        return;
      }
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (e) {
      console.log("Error occurred", e);
    }
  };

  const openGallery = async () => {
    if (!statusMedia?.granted) {
      const permission = await requestPermissionMedia();
      if (!permission.granted) {
        console.log("Permission to access media library was denied");
        return;
      }
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (e) {
      console.log("Error occurred", e);
    }
  };
  return (
    <View>
      <Image
        source={{
          uri:
            image || "https://img.icons8.com/ios/50/user-male-circle--v1.png",
        }}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>Khalif Noor</Text>
      <TouchableOpacity style={styles.editIconContainer} onPress={pickImage}>
        <Icon name="pencil-outline" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  editIconContainer: {
    position: "absolute",
    right: 15,
    top: 60,
    backgroundColor: color.green,
    borderRadius: 15,
    padding: 2,
  },
});
