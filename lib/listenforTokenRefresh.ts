import messaging from '@react-native-firebase/messaging';

export function listenForTokenRefresh() {
  messaging().onTokenRefresh(async (newToken) => {
    console.log('FCM Token refreshed:', newToken);
    // Update the token on your backend
  });
}
