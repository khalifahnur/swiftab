import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 🔹 Request Permission & Get FCM Token
export async function getFCMToken() {
  try {
    const authStatus = await messaging().requestPermission();
    const isAuthorized =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!isAuthorized) {
      console.warn("⚠️ Push notifications permission denied!");
      return null;
    }

    // 🔹 Get Token
    const token = await messaging().getToken();
    console.log("✅ FCM Token:", token);

    // 🔹 Store Token Locally
    await AsyncStorage.setItem("fcmToken", token);
    return token;
  } catch (error) {
    console.error("❌ Error getting FCM token:", error);
  }
}
