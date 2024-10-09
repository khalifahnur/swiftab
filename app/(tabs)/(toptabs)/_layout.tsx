import { color } from "@/constants/Colors";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const TopTabLayout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f5f5f5",
        },
        tabBarActiveTintColor: color.green,
        tabBarInactiveTintColor: "#1E1E1E",
        tabBarIndicatorStyle: {
          backgroundColor: color.green,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
        },
      }}
    >
      <MaterialTopTabs.Screen name="index" options={{ title: "Reservation" }} />
      <MaterialTopTabs.Screen name="cancel" options={{ title: "Cancel" }} />
    </MaterialTopTabs>
  );
};
export default TopTabLayout;
