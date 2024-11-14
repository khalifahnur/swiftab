import { useState, useEffect } from "react";
import { Slot, Stack, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { Store } from "@/redux/store/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  const router = useRouter();
  const client = new QueryClient();

  // Check user status only after component is mounted
  useEffect(() => {
    const checkUserStatus = async () => {
      const onboardingStatus = await AsyncStorage.getItem("hasSeenOnboard");
      const userObj = JSON.parse((await AsyncStorage.getItem("userObj")) || "{}");
      const authToken = userObj.token;

      setUserData(userObj);
      setHasSeenOnboarding(!!onboardingStatus);
      setAuthenticated(!!authToken);
      setIsLoading(false);

      if (authToken) {
        router.replace(hasSeenOnboarding ? "/" : "/(auth)/");
      } else {
        router.replace("/(auth)/signin");
      }
    };

    checkUserStatus();
  }, [router, hasSeenOnboarding]);

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <Provider store={Store}>
      <QueryClientProvider client={client}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="screens" options={{ headerShown: false }} />
          </Stack>
          <Toast />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </Provider>
  );
}
