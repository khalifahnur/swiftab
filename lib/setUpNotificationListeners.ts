import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";

// 🔹 Handle Notifications (Foreground)
export const setupNotificationListeners = async () => {
  messaging().onMessage(async (remoteMessage) => {
    console.log("📩 Foreground Notification:", remoteMessage);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: remoteMessage.notification?.title || "New Message",
        body: remoteMessage.notification?.body || "You have a notification!",
        sound: "default",
        priority: Notifications.AndroidNotificationPriority.MAX,
      },
      trigger: null, // Show immediately
    });
  });
};
